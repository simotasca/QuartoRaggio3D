import { useCallback, useEffect, useState } from "react"

export default function useAnimationContext() {
  const [isAnimating, setIsAnimating] = useState(false);
  const startAnimating = useCallback(() => setIsAnimating(true), []);
  const stopAnimating = useCallback(() => setIsAnimating(false), []);
  return { isAnimating: isAnimating, startAnimating: startAnimating, stopAnimating: stopAnimating }
}