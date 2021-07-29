import { macros } from "../../../store/macroContext";
import { Africa, Home, Cooperativa, Integrazione, Inclusione } from ".";
import {
  MACRO_AFRICA,
  MACRO_COOPERATIVA,
  MACRO_HOME,
  MACRO_INCLUSIONE,
  MACRO_INTEGRAZIONE,
  MACRO_POSITIONS,
} from "../../../helpers/macros";
import usePrevious from "../../../hooks/usePrevious";

const MacroFactory = ({ macro, currentMacro }) => {
  const prevMacro = usePrevious(currentMacro);

  console.log(macro, currentMacro, prevMacro);
  if (!((macro == currentMacro) | (macro == prevMacro))) {
    return null;
  }

  switch (macro) {
    case macros.home:
      return <Home position={MACRO_POSITIONS[MACRO_HOME]} />;
    case macros.cooperativa:
      return <Cooperativa position={MACRO_POSITIONS[MACRO_COOPERATIVA]} />;
    case macros.integrazione:
      return <Integrazione position={MACRO_POSITIONS[MACRO_INTEGRAZIONE]} />;
    case macros.africa:
      return <Africa position={MACRO_POSITIONS[MACRO_AFRICA]} />;
    case macros.inclusione:
      return <Inclusione position={MACRO_POSITIONS[MACRO_INCLUSIONE]} />;
    default:
      return null;
  }
};

export default MacroFactory;
