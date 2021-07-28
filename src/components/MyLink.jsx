import React from "react";
import Link from "next/link";

const MyLink = ({ href = "/", className="", style = {}, ...props }) => {
  return (
    <Link href={href} style={{ cursor: "pointer", ...style }}>
      <a className={className + " primary"} style={{ textDecoration: "none" }}>
        {props.children}
      </a>
    </Link>
  );
};

export default MyLink;
