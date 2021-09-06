import { useEffect, useState } from "react";
import { Collapse } from "react-bootstrap";

const Expandible = ({
  children,
  hiddenHtml,
  isToggled = false,
  duration = 500,
}) => {
  const [toggled, setToggled] = useState(isToggled);

  useEffect(() => {
    setToggled(isToggled);
  }, [isToggled]);

  return (
    <div
      aria-controls="el-collapse"
      aria-expanded={toggled}
      onClick={() => setToggled(!toggled)}
      style={{cursor: "pointer"}}
    >
      <p className="mb-0">{children}</p>
      <Collapse in={toggled} timeout={duration}>
        <div id="el-collapse">{hiddenHtml}</div>
      </Collapse>
      <h2
        className={[
          "bi text-lg-end text-center mb-0",
          toggled ? "bi-chevron-compact-up" : "bi-chevron-compact-down",
        ].join(" ")}
      />
    </div>
  );
};

export default Expandible;
