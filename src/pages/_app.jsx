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

function MyApp({ Component, pageProps }) {
  const macroCtx = useMacroContext();
  const animationCtx = useAnimationContext();
  const router = useRouter();

  return (
    <>
      {!router.pathname.startsWith('/blog') ? (
        <AnimationContext.Provider value={animationCtx}>
          <MacroContext.Provider value={macroCtx}>
            <MainLayout>
              <Component {...pageProps} key={router.pathname} />
            </MainLayout>
          </MacroContext.Provider>
        </AnimationContext.Provider>
      ) : (
        <BlogLayout>
          <Component {...pageProps} />
        </BlogLayout>
      )}
    </>
  );
}

export default MyApp;
