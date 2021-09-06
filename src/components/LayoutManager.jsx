import React, { useEffect, useState, useRef } from "react";
import { Transition } from "react-transition-group";
import Menu from "./Menu";
import styles from "./layoutmanager.module.scss";
import SocialIcons from "./SocialIcons";
import {
  MACRO_CHANGE_TIME_MS,
  PAGE_TOGGLE_TIME_MS,
  WAIT_BETWEEN_MS,
} from "../helpers/animationConfig";
import MenuMobile from "./MenuMobile";

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
        width: "0%",
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
      // la key è settata in app ed è il route corrispondente
      // se il route non cambia non si ha l'animazione
    } else if (displayedChildren.key !== children.key) {
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
              <MenuMobile />
              <div
                ref={nodeRef}
                style={{ ...transitionStyles.page[state] }}
                className={[styles.page].join(" ")}
                id="page"
              >
                <div className={styles.pageWrapper}>{displayedChildren}</div>
              </div>
            <SocialIcons />
            </div>
          </>
        )}
      </Transition>
    </>
  );
}

const LayoutManager = (props) => {
  return (
    <>
      <HtmlContent>{props.children}</HtmlContent>
    </>
  );
};

export default LayoutManager;
