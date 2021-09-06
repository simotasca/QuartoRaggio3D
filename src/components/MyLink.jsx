import React from "react";
import Link from "next/link";

const MyLink = ({children,  href = "/", className="", style = {}, ...props }) => {
  return (
    <div {...props} style={{ cursor: "pointer", ...style }}>
      <Link href={href}>
        <a className={className + " primary"} style={{ textDecoration: "none" }}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default MyLink;
