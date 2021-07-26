import { useContext, useEffect } from "react";
import CenterSection from "../components/CenterSection";
import { MacroContext, macros } from "../context/macroContext";

const CooperativaPage = () => {
  const { setCurrentMacro } = useContext(MacroContext);
  useEffect(() => setCurrentMacro(macros.cooperativa), [setCurrentMacro]);

  return (<h1>AHOOOO!</h1>
  );
};

export default CooperativaPage;
