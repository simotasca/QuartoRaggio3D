import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/custom.scss';
import '../styles/body.scss';
import '../styles/utils.scss';
import LayoutManager from '../components/LayoutManager';
import { MacroContext } from '../store/macroContext';
import { useRouter } from 'next/dist/client/router';
import { AnimationContext } from '../store/animationContext';
import useAnimationContext from '../hooks/store/useAnimationContext';
import useMacroContext from '../hooks/store/useMacroContext';

function MyApp({ Component, pageProps }) {
  const macroCtx = useMacroContext();
  const animationCtx = useAnimationContext();
  const router = useRouter();

  return (
    <AnimationContext.Provider value={animationCtx}>
      <MacroContext.Provider value={macroCtx}>
        <LayoutManager>
          <Component {...pageProps} key={router.pathname} />
        </LayoutManager>
      </MacroContext.Provider>
    </AnimationContext.Provider>
  );
}

export default MyApp;
