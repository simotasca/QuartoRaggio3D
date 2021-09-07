import React, { useEffect, useState } from 'react';
import { MACRO_CHANGE_TIME_MS, PAGE_TOGGLE_TIME_MS, WAIT_BETWEEN_MS } from '../helpers/animationConfig';
import styles from './layoutmanager.module.scss';
import MenuMobile from './MenuMobile';
import SocialIcons from './SocialIcons';
import { ThreeScene } from './three';

function HtmlContent({ children }) {
  const [visible, setVisible] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(null);

  useEffect(() => {
    if (displayedChildren == null) {
      setDisplayedChildren(children);
      // la key è settata in app ed è il route corrispondente
      // se il route non cambia non si ha l'animazione
    } else if (displayedChildren.key !== children.key) {
      setVisible(false);

      const timer = setTimeout(() => {
        setVisible(true);
        setDisplayedChildren(children);
      }, PAGE_TOGGLE_TIME_MS);

      return () => clearTimeout(timer);
    }
  }, [children]);

  return (
    <>
      <div className={styles.panelWrapper}>
        <div
          style={{
            transform: visible ? 'translateX(0%)' : 'translateX(-100%)',
            transition: visible ? `transform ${PAGE_TOGGLE_TIME_MS}ms ${MACRO_CHANGE_TIME_MS + WAIT_BETWEEN_MS}ms` : `transform ${PAGE_TOGGLE_TIME_MS}ms`
          }}
          className={styles.panel}
        />
      </div>

      <div className={styles.envelope}>
        <MenuMobile />
        <div
          style={{
            opacity: visible ? '1' : '0',
            transition: visible ? `opacity ${PAGE_TOGGLE_TIME_MS}ms ${MACRO_CHANGE_TIME_MS + WAIT_BETWEEN_MS}ms` : `opacity ${PAGE_TOGGLE_TIME_MS}ms`
          }}
          className={styles.page}
          id="page">
          <div className={styles.pageWrapper}>{displayedChildren}</div>
        </div>
        <SocialIcons />
      </div>
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
