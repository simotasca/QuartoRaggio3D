import { useContext, useEffect } from "react";
import { macros } from "../helpers/macros";
import { MacroContext } from "../store/macroContext";

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  return (<h1>AHOOOO!</h1>
  );
};

export default CooperativaPage;
