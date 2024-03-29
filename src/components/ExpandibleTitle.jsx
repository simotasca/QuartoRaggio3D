import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function ExpandibleTitle({ children, title, isOpen, duration, style = {} }) {
  const [open, setOpen] = useState(isOpen);
  const [height, setHeight] = useState(0);
  const collapse = useRef();

  useLayoutEffect(() => {
    setHeight(collapse.current.clientHeight);
  }, []);

  const size = useWindowSize();
  useEffect(() => {
    setHeight(collapse.current.clientHeight);
  }, [size]);

  return (
    <div style={{ ...style }}>
      <div className="d-flex flex-row justify-content-between pointer" onClick={() => setOpen(!open)}>
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
          {children}
          <div className="d-flex justify-content-center pointer" onClick={() => setOpen(!open)}>
            <span className="h1 bi bi-chevron-compact-up"></span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExpandibleTitle;
