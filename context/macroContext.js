import { createContext } from "react"

export const macros = {
  home: 0,
  cooperativa: 1,
  integrazione: 2,
  africa: 3,
  inclusione: 4,
  comunita: 5
}

const macroDefault = {
  macro: macros.home,
  setCurrentMacro: () => { }
};

export const MacroContext = createContext(macroDefault);