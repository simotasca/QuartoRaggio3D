import { useRef } from "react";
import { forwardRef } from "react";

const CenterSection = forwardRef(({ children }, ref) => {

  return (
    <div
      className="container"
      ref={ref}
      style={{
        // scrollSnapAlign: snapAlign,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div style={{ maxHeight: "100%", margin: "auto 0", width: "100%" }}>
        {children}
      </div>
    </div>
  );
});

CenterSection.displayName = "CenterSection"; // ESLint error react/display-name

export default CenterSection;
