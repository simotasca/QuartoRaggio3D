import React, { useContext, useEffect, useState } from 'react';
import { PAGE_TOGGLE_TIME_MS } from '../helpers/animationConfig';
import { AnimationContext } from '../store/animationContext';
import styles from './layoutmanager.module.scss';
import MenuMobile from './MenuMobile';
import SocialIcons from './SocialIcons';
import ThreeScene from './three/ThreeScene';

const LayoutManager = ({ children }) => {
  const { isAnimating, startAnimating } = useContext(AnimationContext);
  const [visible, setVisible] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(null);

  //#region animation
  useEffect(() => {
    if (displayedChildren == null) {
      setDisplayedChildren(children);
      // la key è settata in app ed è il route corrispondente
      // se il route non cambia non si ha l'animazione
    } else if (displayedChildren.key !== children.key) {
      setVisible(false);
      startAnimating();

      const timer = setTimeout(() => {
        setVisible(true);
        setDisplayedChildren(children);
      }, PAGE_TOGGLE_TIME_MS + 200);

      return () => clearTimeout(timer);
    }
  }, [children]);

  //#endregion

  return (
    <>
      <ThreeScene />
      <div className={styles.panelWrapper}>
        <div
          style={{
            willChange: 'transform',
            transform: visible & !isAnimating ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: visible & !isAnimating ? `transform ${PAGE_TOGGLE_TIME_MS}ms` : `transform ${PAGE_TOGGLE_TIME_MS}ms 201ms`
          }}
          className={styles.panel}
        />
      </div>
      <div className={styles.envelope}>
        <MenuMobile />
        <div
          style={{
            opacity: visible & !isAnimating ? '1' : '0',
            transition: visible & !isAnimating ? `opacity ${PAGE_TOGGLE_TIME_MS}ms` : `opacity ${PAGE_TOGGLE_TIME_MS}ms 201ms`
          }}
          className={styles.page}
          id="page">
          <div className={styles.pageWrapper}>{displayedChildren}</div>
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default LayoutManager;
