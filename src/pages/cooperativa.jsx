import { useContext, useEffect } from "react";
import { MacroContext, macros } from "../store/macroContext";

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  return (<h1>AHOOOO!</h1>
  );
};

export default CooperativaPage;
