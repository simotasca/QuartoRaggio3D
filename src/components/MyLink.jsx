import React from 'react';
import Link from 'next/link';

export default function MyLink({ children, href = '/', className = '', style = {}, ...props }) {
  return (
    <div {...props} style={{ cursor: 'pointer', ...style }}>
      <Link href={href}>
        <a className={className + ' primary'} style={{ textDecoration: 'none' }}>
          {children}
        </a>
      </Link>
    </div>
  );
}
