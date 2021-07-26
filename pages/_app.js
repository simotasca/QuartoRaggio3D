import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/body.scss";
import "../styles/utils.scss";
import LayoutManager from '../components/LayoutManager'
import { MacroContext } from '../context/macroContext';
import { useMacro } from '../hooks/useMacro';


function MyApp({ Component, pageProps }) {

  const macro = useMacro();

  return (
    <MacroContext.Provider value={macro}>
      <LayoutManager>
        <Component {...pageProps} />
      </LayoutManager>
    </MacroContext.Provider>
  );
}

export default MyApp
