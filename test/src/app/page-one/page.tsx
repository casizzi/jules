'use client';

import React, { useState } from 'react';
import FormWizard from '../../components/wizard/FormWizard'; // Adjust path as needed
import Link from 'next/link'; // Keep existing imports if any

export default function PageOne() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Page One</h1>
      <p>This is the first page. Click the button below to open the bodily makeup form wizard.</p>

      <button
        onClick={() => setIsWizardOpen(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        Open Bodily Makeup Form
      </button>

      {isWizardOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000 // Ensure wizard is on top
        }}>
          <FormWizard onClose={() => setIsWizardOpen(false)} />
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <Link href="/page-two">Go to Page Two</Link><br />
        <Link href="/">Go to Home</Link>
      </div>
    </div>
  );
}
