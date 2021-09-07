import { Children, useEffect, useState } from "react";



const ListAnimation = ({transitionDuration=400, delay=50, className, childClassName, visible=true, animated=true, onComplete, children}) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  useEffect(() => {
    let count = Children.count(children);
    if (!visible) {
      // Animate all children out
      count = 0;
    }

    if (count == maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        onComplete && onComplete();
      }, transitionDuration);

      return () => clearTimeout(timeout);
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);

    return () => clearTimeout(timeout);
  }, [Children.count(children), delay, maxIsVisible, visible, transitionDuration]);



  return (
    <div className={className}>
      {animated
        ? Children.map(children, (child, i) => {
            return (
              <div
                className={childClassName}
                style={{
                  willChange: "transform",
                  transition: `transform ${transitionDuration}ms`,
                  transform: maxIsVisible > i ? "none" : "translateY(50px)",
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
};

export default ListAnimation;
