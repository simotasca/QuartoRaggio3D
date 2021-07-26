import Image from "next/image";
import styles from "./menu.module.scss";
import MyLink from "./MyLink";
import { useContext } from "react";
import { MacroContext } from "../context/macroContext";

const Cap = (props) => {
  return (
    <span
      className={[styles.cap, props.active ? styles.capActv : ""].join(" ")}
    >
      {props.children}
    </span>
  );
};

const Logo = () => {
  return (
    <MyLink href={"/"}>
      <div className={styles.logo + " ms-5"}>
        <Image
          src="/resources/Risorsa.svg"
          alt="No cap"
          height="50px"
          width="50px"
        />
        <h4 className="ms-3 mt-0 d-xl-block d-lg-none d-block">
          Quarto <span className={"success"}>Raggio</span>
        </h4>
      </div>
    </MyLink>
  );
};

const MenuItem = (props) => {
  return (
    <li className={styles.li}>
      <MyLink
        href={props.href}
        className={[
          styles.wonderLeyen,
          props.active ? styles.wonderLeyenActv : "",
        ].join(" ")}
      >
        <Cap active={props.active}>{props.children.charAt(0)}</Cap>
        {props.children.substring(1, props.children.lenght)}
      </MyLink>
    </li>
  );
};

const Menu = () => {
  const { macro } = useContext(MacroContext);

  const menuItems = [
    { href: "/", text: "home" },
    { href: "/cooperativa", text: "cooperativa" },
    { href: "/integrazione", text: "integrazione" },
    { href: "/africa", text: "progetti sviluppo" },
    { href: "/inclusione", text: "inclusione culturale e religiosa" },
    { href: "/comunita", text: "comunita" },
  ];

  return (
    <div className={styles.topBar}>
      <Logo />
      <ul className={styles.list + " d-lg-flex d-none"}>
        {menuItems.map((m, i) => (
          <MenuItem key={i} href={m.href} active={i == macro}>
            {m.text}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
