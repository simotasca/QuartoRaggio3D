import { useEffect, useState } from "react";
import { useRef } from "react";
import useIntersection from "../hooks/useIntersection";
import styles from "./appearonintersection.module.scss";

function AppearOnIntersection({ children }) {
  const ref = useRef();
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    treshold: 1,
  });
  const [visible, setVisible] = useState(false);

  // anzichè usestate su intersection

  useEffect(() => {
    if (intersection) {
      setVisible(true);
      console.log("siiii");
    } else {
      setVisible(false);
      console.log("nooo");
    }
  }, [intersection]);

  return (
    <div ref={ref} className={styles.base + visible ? " in" : " out"}>
      {children}
    </div>
  );
}

export default AppearOnIntersection;
