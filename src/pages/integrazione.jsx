import { useContext, useEffect } from "react";
import { macros } from "../helpers/macros";
  import { MacroContext } from "../store/macroContext";

const IntegrazionePage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.integrazione), [setCurrentMacro]);

  return (
    <div>
      <h1>Integrazione Sociale</h1>
      <hr />
      <span>
        <b>E`&apos;` una cosa importante</b>
      </span>
      <br />
      <span>Troppo importante</span>
    </div>
  );
};

export default IntegrazionePage;
