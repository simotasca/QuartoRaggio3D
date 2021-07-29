import { useContext, useEffect, useMemo } from "react";
import { macros } from "../helpers/macros";
import { MacroContext } from "../store/macroContext";

const InclusionePage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.inclusione), [setCurrentMacro]);

  return (
    <div>
      <h1>Inclusione Culturale e religiosa</h1>
      <hr />
      <span>
        <b>Volontà, a more eluce</b>
      </span>
      <br />
      <span>Potentemente</span>
    </div>
  );
};

export default InclusionePage;
