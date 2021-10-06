import React from 'react';
import Link from 'next/link';

export default function MyLink({ children, href = '/', className = '', style = {}, ...props }) {
  return (
    <div {...props} style={{ ...style }} className={'pointer text-dark'}>
      <Link href={href}>
        <a className={className} style={{ textDecoration: 'none' }}>
          {children}
        </a>
      </Link>
    </div>
  );
}
