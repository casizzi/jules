import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <button style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
