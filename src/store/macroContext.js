import { createContext } from "react"
import { macros } from "../helpers/macros";

const macroDefault = {
  macro: macros.home,
  setCurrentMacro: () => { }
};

export const MacroContext = createContext(macroDefault);