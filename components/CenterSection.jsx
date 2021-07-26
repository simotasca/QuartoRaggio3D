import { useState } from "react";

const CenterSection = ({ children }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div style={{ maxHeight: "100%", margin: "auto 0" }}>{children}</div>
    </div>
  );
};

export default CenterSection;
