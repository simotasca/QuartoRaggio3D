import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/body.scss";
import "../styles/utils.scss";
import LayoutManager from '../components/LayoutManager'
import { MacroContext } from '../store/macroContext';
import { useMacro } from '../hooks/useMacro';
import { useRouter } from 'next/dist/client/router';


function MyApp({ Component, pageProps }) {

  const macro = useMacro();
  const router = useRouter();

  return (
    <MacroContext.Provider value={macro}>
      <LayoutManager>
        <Component {...pageProps} key={router.pathname} />
      </LayoutManager>
    </MacroContext.Provider>
  );
}

export default MyApp
