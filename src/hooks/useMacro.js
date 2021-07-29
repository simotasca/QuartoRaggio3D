import { useCallback, useState } from "react"
import { macros } from "../helpers/macros";

export const useMacro = () => {
  const [macro, setMacro] = useState(macros.home);
  const setCurrentMacro = useCallback(currentMacro => setMacro(currentMacro), []);
  return {
    macro,
    setCurrentMacro
  }
}