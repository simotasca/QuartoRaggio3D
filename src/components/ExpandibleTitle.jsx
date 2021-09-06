import { useState } from "react";
import { Collapse } from "react-bootstrap";

function ExpandibleTitle({
  children,
  title,
  isOpen,
  duration=500,
  style = {},
}) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div style={{ ...style }}>
      <div
        className="d-flex flex-row justify-content-between"
        onClick={() => setOpen(!open)}
        aria-controls="el-collapse"
        aria-expanded={open}
      >
        <div>
          <h1>{title}</h1>
        </div>
        <span className={`h1 float-end bi ${open?"bi-chevron-compact-up":"bi-chevron-compact-down"}`}></span>
      </div>

      <Collapse in={open}>
        <div id="el-collapse">
          {children}

          <div className="d-flex justify-content-center" onClick={() => setOpen(!open)}>
            <span className="h1 bi bi-chevron-compact-up"></span>
          </div>
        </div>
      </Collapse>
      <hr />
    </div>
  );
}

export default ExpandibleTitle;
