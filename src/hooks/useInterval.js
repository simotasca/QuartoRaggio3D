import { useEffect } from "react";

const useInterval = (fn, interval = 1000) => {
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => fn(), interval);
    return () => clearInterval(intervalId);
  });
}

export default useInterval;