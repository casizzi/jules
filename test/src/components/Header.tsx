import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <Link href="/page-one">Page One</Link>
          </li>
          <li>
            <Link href="/page-two">Page Two</Link>
          </li>
          <li>
            <Link href="/page-three">Page Three</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
