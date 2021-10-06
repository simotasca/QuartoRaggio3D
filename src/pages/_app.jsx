import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/custom.scss';
import '../styles/body.scss';
import '../styles/utils.scss';
import { useRouter } from 'next/dist/client/router';
import useAnimationContext from '../hooks/store/useAnimationContext';
import useMacroContext from '../hooks/store/useMacroContext';
import { AnimationContext } from '../store/animationContext';
import { MacroContext } from '../store/macroContext';
import MainLayout from '../components/layout/MainLayout';
import BlogLayout from '../components/layout/BlogLayout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  const macroCtx = useMacroContext();
  const animationCtx = useAnimationContext();
  const router = useRouter();

  if (router.pathname.startsWith('/blog')) {
    return (
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    );
  } else if (router.pathname.startsWith('/bayesarew/')) {
    return <Component {...pageProps} />;
  } else {
    return (
      <AnimationContext.Provider value={animationCtx}>
        <MacroContext.Provider value={macroCtx}>
          <MainLayout>
            <Component {...pageProps} key={router.pathname} />
          </MainLayout>
        </MacroContext.Provider>
      </AnimationContext.Provider>
    );
  }
}

export default MyApp;
