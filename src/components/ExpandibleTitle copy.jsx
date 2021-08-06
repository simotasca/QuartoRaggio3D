import { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const ExpandibleTitle = ({ children, title, isToggled, duration = 1000 }) => {
  const [toggled, setToggled] = useState(isToggled);

  const hidden = useRef();

  useEffect(() => {
    if (!isToggled) {
      hidden.current.style.height = 0 + "px";
    }
  }, []);

  function collapse() {
    hidden.current.style.minHeight = 0 + "px";
    setToggled(false);
  }

  function expand() {
    var sectionHeight = hidden.current.scrollHeight;
    hidden.current.style.minHeight = sectionHeight + "px";
    setToggled(true);
  }

  function toggle() {
    if (toggled) {
      collapse();
    } else {
      expand();
    }
  }

  useEffect(() => {
    if (isToggled) {
      expand();
    } else {
      collapse();
    }
  }, [isToggled]);

  const size = useWindowSize();
  useEffect(() => {
    if (toggled) {
      hidden.current.style.minHeight = hidden.current.scrollHeight + "px";
    }
  }, [size]);

  return (
    <div>
      <div onClick={toggle}>
        <span className="h1">{title}</span>
        {/*<span
            className={[
              "h1 float-end bi text-lg-end text-center mb-0",
              toggled ? "bi-chevron-compact-up" : "bi-chevron-compact-down",
            ].join(" ")}
          />*/}
        <span className="h1 float-end">{toggled ? "-" : "+"}</span>
      </div>
      <div
        className="row"
        ref={hidden}
        style={{ overflow: "hidden", transition: duration + "ms" }}
      >
        <div className="col mx-4 mt-3">{children}</div>
      </div>
      <hr />
    </div>
  );
};

export default ExpandibleTitle;
