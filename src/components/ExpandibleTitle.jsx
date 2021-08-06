import { useState } from "react";
import { Collapse } from "react-bootstrap";


function ExpandibleTitle({ children, title, isOpen, duration = 1000 }) {
  const [open, setOpen] = useState(isOpen);

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between"
        onClick={() => setOpen(!open)}
        aria-controls="el-collapse"
        aria-expanded={open}
      >
        <div>
          <h1>{title}</h1>
        </div>
        <span className="h1 float-end">{open ? "-" : "+"}</span>
      </div>

      <Collapse in={open} timeout={duration}>
        <div id="el-collapse">{children}</div>
      </Collapse>
      <hr />
    </>
  );
}

export default ExpandibleTitle;
