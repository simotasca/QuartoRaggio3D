import { useEffect } from "react"
import usePage from "./usePage";

const useEventListener = (elem, eventName, handler) => {
  useEffect(() => {
    elem.addEventListener(eventName, handler);
    return () => {
      elem.removeEventListener(eventName, handler);
    };
  });
}
export default useEventListener;

export const usePageEventListener = (eventName, handler) => {
  useEventListener(usePage(), eventName, handler)
}
