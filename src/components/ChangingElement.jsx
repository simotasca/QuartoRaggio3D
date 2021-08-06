import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import useInterval from "../hooks/useInterval";

const ChangingElement = ({ elements, interval = 4000, transition=400, first = 0 }) => {
  const [idx, setIdx] = useState(first);
  const [current, setCurrent] = useState(elements[first]);
  const [inProp, setInProp] = useState(true);

  function increment() {
    if (idx == elements.length - 1) {
      setIdx(0);
    } else setIdx(idx + 1);
    setInProp(false);
  }

  useInterval(increment, interval);

  const nodeRef = useRef();

  return (
    <>
      <Transition
        in={inProp}
        timeout={transition}
        nodeRef={nodeRef}
        onExited={() => {
          setInProp(true);
          setCurrent(elements[idx]);
        }}
      >
        {(state) => (
          <div className="">
            <div
              ref={nodeRef}
              onClick={() => increment()}
              style={{
                cursor: "pointer",
                transition: transition + "ms",
                opacity: (state != "exiting") & (state != "exited") ? "1" : "0",
              }}
            >
              {current}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default ChangingElement;
