import { useRef } from "react";

export default function useRefsArray() {
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = el => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return [refs, addToRefs];
}