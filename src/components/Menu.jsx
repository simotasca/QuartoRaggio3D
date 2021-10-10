import Image from 'next/image';
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { MacroContext } from '../store/macroContext';
import styles from './menu.module.scss';
import MyLink from './MyLink';

const Cap = ({ children, active }) => {
  const ref = useRef(null);
  const capRef = useRef(null);
  useEffect(() => {
    let fSize = getComputedStyle(ref.current)['font-size'];
    fSize = parseInt(fSize.substring(0, fSize.length - 2));
    capRef.current.style.fontSize = `${fSize * 1.3}px`;
  }, [ref, capRef]);

  return (
    <span ref={ref}>
      <span ref={capRef} className={active ? styles.capActv : ''}>
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
  {
    text: 'progetti sviluppo',
    sub: [
      { href: '/progetti', text: 'quarto Raggio' },
      { href: '/bayesarew', text: 'bay Sa Rew' }
    ]
  },
  { href: '/inclusione', text: 'inclusione culturale e religiosa' },
  { href: '/comunita', text: 'comunita' }
];

function SidePanel({ children, show, handleClose }) {
  return (
    <div className={[styles.offcanvas, !show ? styles.offcanvasHidden : '', 'd-lg-none'].join(' ')}>
      <div className="mt-3 mb-3">
        <h4 className="bi bi-x-lg float-end me-2 secondary pointer" onClick={handleClose} />
        <div className="mx-auto text-center">
          <Image src="/resources/Risorsa.svg" alt="No cap" height="50px" width="50px" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function Item({ item, active }) {
  if (item.sub) {
    return (
      <li className="nav-item mx-2 h6 dropdown pointer">
        <a className={[styles.wonderLeyen, active ? styles.wonderLeyenActv : ''].join(' ')} id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <b>
            <Cap active={active}>{item.text}</Cap>
          </b>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end mt-3 p-0 rounded-2 border-start-0 border-end-0 border-2 border-dark"
          style={{ background: 'rgb(230, 230, 230, .85)' }}
          aria-labelledby="navbarDropdownMenuLink">
          {item.sub.map((m, i) => (
            <Fragment key={i}>
              <li className="mx-3 my-3 text-nowrap">
                <MyLink href={m.href}>
                  <b>
                    <Cap>{m.text}</Cap>
                  </b>
                </MyLink>
              </li>
              {i != item.sub.length - 1 && <hr className="m-0 mx-2" />}
            </Fragment>
          ))}
        </ul>
      </li>
    );
  } else
    return (
      <li className="nav-item mx-2 h6">
        <MyLink href={item.href} className={[styles.wonderLeyen, active ? styles.wonderLeyenActv : ''].join(' ')}>
          <b>
            <Cap active={active}>{item.text}</Cap>
          </b>
        </MyLink>
      </li>
    );
}

function SideItem({ item, active, onClick }) {
  if (!item.sub)
    return (
      <MyLink href={item.href} onClick={onClick} className="w-100">
        <h4>
          <b>
            <Cap active={active}>{item.text}</Cap>
          </b>
        </h4>
      </MyLink>
    );
  else
    return (
      <>
        <h4 className="w-100" data-bs-toggle="collapse" href={'#sideCollapse' + item.href} role="button" aria-expanded="false" aria-controls="collapseExample">
          <b>
            <Cap active={active}>{item.text}</Cap>
          </b>
        </h4>
        <div className="collapse" id={'sideCollapse' + item.href}>
          {item.sub.map((sub, i) => (
            <MyLink key={i} className="w-100" href={sub.href} onClick={onClick}>
              <h4 className="ms-3">
                <b>
                  <Cap>{sub.text}</Cap>
                </b>
              </h4>
            </MyLink>
          ))}
        </div>
      </>
    );
}

export default function MenuMobile() {
  const { macro } = useContext(MacroContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <s className="navbar-brand">
            <Logo />
          </s>
          <div className="d-lg-none" style={{ transition: 'none' }} onClick={() => setShow(!show)}>
            <span className="h3 bi bi-stack pointer" />
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {menuItems.map((m, i) => (
                <Item key={i} item={m} active={macro == i} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <SidePanel show={show} handleClose={handleClose}>
        <div className="d-flex flex-column justify-content-around">
          {menuItems.map((m, i) => (
            <Fragment key={i}>
              <SideItem item={m} active={macro == i} onClick={handleClose} />
              {i != menuItems.length && <hr />}
            </Fragment>
          ))}
        </div>
      </SidePanel>
      {/*<div className={[styles.offcanvasBlur, !show ? styles.offcanvasBlurHidden : ''].join(' ')} onClick={handleClose} />*/}
    </>
  );
}
