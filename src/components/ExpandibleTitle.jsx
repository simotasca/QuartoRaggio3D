import { useEffect, useRef, useState } from 'react';
import { Row } from 'react-bootstrap';

function ExpandibleTitle({ children, title, isOpen, duration, style = {} }) {
  const [open, setOpen] = useState(isOpen);
  const [height, setHeight] = useState(0);
  const collapse = useRef();

  const Kosher = dynamic(() => import('../sections/cooperativa/Kosher'));

  useEffect(() => {
    console.log(collapse.current.clientHeight);
    setHeight(collapse.current.clientHeight);
  }, [height, setHeight, collapse]);

  return (
    <div style={{ ...style }}>
      <div className="d-flex flex-row justify-content-between" onClick={() => setOpen(!open)}>
        <div>
          <h1>{title}</h1>
        </div>
        <span className={`h1 float-end bi ${open ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down'}`}></span>
      </div>

      <div
        style={{
          overflow: 'hidden',
          willChange: 'height',
          height: open ? height + 'px' : '0px',
          transition: `height ${duration || 500}ms ease-in-out`
        }}>
        <div ref={collapse}>
          <Row className="col ms-4 mt-3">{open && <Kosher />}</Row>
          <div className="d-flex justify-content-center" onClick={() => setOpen(!open)}>
            <span className="h1 bi bi-chevron-compact-up"></span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExpandibleTitle;
