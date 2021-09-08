import { createContext } from "react"

const animationDefault = {
  isAnimating: false,
  startAnimating: () => { },
  stopAnimating: () => { }
};

export const AnimationContext = createContext(animationDefault);