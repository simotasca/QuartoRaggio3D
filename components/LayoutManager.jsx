import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import Menu from "./Menu";
import styles from "./layoutmanager.module.scss";
import SocialIcons from "./SocialIcons";
import { ThreeScene } from "./three";
import {
  MACRO_CHANGE_TIME_MS,
  PAGE_TOGGLE_TIME_MS,
  WAIT_BETWEEN_MS,
} from "../helpers/animationConfig";

function HtmlContent({ children }) {
  const [inProp, setInProp] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(null);

  const duration = {
    appear: PAGE_TOGGLE_TIME_MS,
    enter: MACRO_CHANGE_TIME_MS + WAIT_BETWEEN_MS,
    exit: PAGE_TOGGLE_TIME_MS,
  };

  const transitionStyles = {
    page: {
      entering: {
        opacity: 0,
      },
      entered: {
        opacity: 1,
        transition: "opacity " + PAGE_TOGGLE_TIME_MS + "ms",
      },
      exiting: {
        opacity: 0,
        transition: "opacity " + PAGE_TOGGLE_TIME_MS + "ms",
      },
      exited: {
        opacity: 0,
      },
    },
    panel: {
      entering: {
        width: "0%"
      },
      entered: {
        width: "100%",
        transition: "width " + PAGE_TOGGLE_TIME_MS + "ms",
      },
      exiting: {
        width: "0%",
        transition: "width " + PAGE_TOGGLE_TIME_MS + "ms",
      },
      exited: {
        width: "0%",
      },
    },
  };

  const nodeRef = useRef(null);

  useEffect(() => {
    if (displayedChildren == null) {
      setDisplayedChildren(children);
    } else if(displayedChildren.type.name !== children.type.name){
      setInProp(false);
    }
  }, [children]);

  const onExitedHandler = () => {
    setDisplayedChildren(children);
    setInProp(true);
  };

  return (
    <>
      <Transition
        nodeRef={nodeRef}
        in={inProp}
        timeout={duration}
        onExited={onExitedHandler}
      >
        {(state) => (
          <>
            <div className={styles.panelWrapper}>
              <div
                style={{ ...transitionStyles.panel[state] }}
                className={[styles.panel].join(" ")}
              />
            </div>

            <div className={styles.envelope}>
              <Menu />
              <div
                ref={nodeRef}
                style={{ ...transitionStyles.page[state] }}
                className={[styles.page].join(" ")}
              >
                <div className={styles.pageWrapper}>{displayedChildren}</div>
              </div>
            </div>
          </>
        )}
      </Transition>
      <SocialIcons />
    </>
  );
}

const LayoutManager = (props) => {
  return (
    <>
      <ThreeScene />
      <HtmlContent>{props.children}</HtmlContent>
    </>
  );
};

export default LayoutManager;
