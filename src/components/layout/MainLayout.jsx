import React, { useEffect, useState } from 'react';
import { PAGE_TOGGLE_TIME_MS } from '../../helpers/animationConfig';
import { classNames } from '../../helpers/classNames';
import useAnimationContext from '../../hooks/store/useAnimationContext';
import useMacroContext from '../../hooks/store/useMacroContext';
import { AnimationContext } from '../../store/animationContext';
import { MacroContext } from '../../store/macroContext';
import Menu from '../Menu';
import SocialIcons from '../SocialIcons';
import ThreeScene from '../three/ThreeScene';
import styles from './mainlayout.module.scss';

export default function MainLayout({ children }) {
  // context
  const macroCtx = useMacroContext();
  const animationCtx = useAnimationContext();

  //#region animation
  const { isAnimating, startAnimating } = animationCtx;
  const [displayedChildren, setDisplayedChildren] = useState(null);

  useEffect(() => {
    if (displayedChildren == null) {
      setDisplayedChildren(children);
      // la key è settata in app ed è il route corrispondente
      // se il route non cambia non si ha l'animazione
    } else if (displayedChildren.key !== children.key) {
      startAnimating();
      const timer = setTimeout(() => {
        /* attendo la chiusura del menu e della pagina e cambio il children
         * così la pagina cambia la macro e parte l'animazione di three
         * al termine della quale isAnimating è settato a false */

        setDisplayedChildren(children);
      }, PAGE_TOGGLE_TIME_MS + 200); // mettere i 200 solo se il menu è hamburger

      return () => clearTimeout(timer);
    }
  }, [children, displayedChildren, startAnimating]);

  //#endregion

  return (
    <AnimationContext.Provider value={animationCtx}>
      <MacroContext.Provider value={macroCtx}>
        <ThreeScene />
        <div className={styles.panelWrapper}>
          <div className={classNames(styles.panel, isAnimating ? styles.panelHidden : '')} />
        </div>
        <div className={styles.envelope}>
          <Menu />
          <div className={[styles.page, isAnimating ? styles.pageHidden : ''].join(' ')} id="page">
            <div className={styles.pageWrapper}>{displayedChildren}</div>
          </div>
        </div>
      </MacroContext.Provider>
    </AnimationContext.Provider>
  );
}
