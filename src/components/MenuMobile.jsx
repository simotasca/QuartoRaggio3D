import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './menu.module.scss';
import { Primary } from './Span';
import MyLink from './MyLink';
import { MacroContext } from '../store/macroContext';

const Cap = ({ children, active }) => {
  const ref = useRef(null);
  const capRef = useRef(null);
  useEffect(() => {
    let fSize = getComputedStyle(ref.current)['font-size'];
    fSize = fSize.substring(0, fSize.length - 2);
    fSize = parseInt(fSize);
    capRef.current.style.fontSize = `${fSize * 1.3}px`;
  }, [ref, capRef]);

  return (
    <span ref={ref}>
      <span ref={capRef} style={{ willChange: 'font-size' }} className={active ? styles.capActv : ''}>
        {children.charAt(0)}
      </span>
      {children.substring(1, children.length)}
    </span>
  );
};

function Logo() {
  return (
    <MyLink href={'/'}>
      <div className={styles.logo + ' ms-md-5'}>
        <Image src="/resources/Risorsa.svg" alt="No cap" height="50px" width="50px" />
        <h4 className="ms-3 mt-0 d-xl-block d-lg-none d-block">
          Quarto <span className={'success'}>Raggio</span>
        </h4>
      </div>
    </MyLink>
  );
}

const menuItems = [
  { href: '/', text: 'home' },
  { href: '/cooperativa', text: 'cooperativa' },
  { href: '/integrazione', text: 'integrazione' },
  { href: '/africa', text: 'progetti sviluppo' },
  { href: '/inclusione', text: 'inclusione culturale e religiosa' },
  { href: '/comunita', text: 'comunita' }
];

function SidePanel({ children, show, handleClose }) {
  return (
    <div className={[styles.offcanvas, !show ? styles.offcanvasHidden : '', 'd-lg-none'].join(' ')}>
      <div className="mt-3 mb-3">
        <h4 className="bi bi-x-lg float-end me-2 secondary" onClick={handleClose} />
        <div className="mx-auto text-center">
          <Image src="/resources/Risorsa.svg" alt="No cap" height="50px" width="50px" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function MenuMobile() {
  const { macro } = useContext(MacroContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar className="p-0" expand="lg" aria-label="Main navigation">
        <Container fluid>
          <Navbar.Brand className="navbar-brand">
            <Logo />
          </Navbar.Brand>
          <div className="d-lg-none" style={{ transition: 'none' }} onClick={() => setShow(!show)}>
            <Primary className="bi bi-stack" />
          </div>
          <Navbar.Collapse hidden>
            <Nav className="ms-auto mb-2 mb-lg-0">
              {menuItems.map((m, i) => (
                <Nav.Item key={i} className="mx-2 h6">
                  <MyLink href={m.href} className={[styles.wonderLeyen, i == macro ? styles.wonderLeyenActv : ''].join(' ')}>
                    <b>
                      <Cap active={macro == i}>{m.text}</Cap>
                    </b>
                  </MyLink>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SidePanel show={show} handleClose={handleClose}>
        <div className="d-flex flex-column justify-content-around">
          {menuItems.map((m, i) => (
            <>
              <MyLink href={m.href} key={i} onClick={handleClose}>
                <h4>
                  <b>
                    <Cap active={macro == i}>{m.text}</Cap>
                  </b>
                </h4>
              </MyLink>
              {i != menuItems.length ? <hr /> : ''}
            </>
          ))}
        </div>
      </SidePanel>
      {/*<div className={[styles.offcanvasBlur, ''].join(' ')} style={show ? {} : { opacity: '0', zIndex: '-1' }} onClick={handleClose} />*/}
    </>
  );
}

/**
 * https://stackoverflow.com/questions/51803259/react-app-css-transitions-are-very-slow
 */

/*
  <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <div className="mx-auto">
         <Image src="/resources/Risorsa.svg" alt="No cap" height="50px" width="50px" />
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className="py-auto">
       <div className="d-flex flex-column justify-content-around">
        {menuItems.map((m, i) => (<>
          <MyLink href={m.href} key={i} onClick={handleClose}>
            <h4><b>
                {m.text}
            </b></h4>
          </MyLink>
          {i!=menuItems.length?<hr/>:""}
        </>))}

       </div>
      </Offcanvas.Body>
    </Offcanvas>
*/
