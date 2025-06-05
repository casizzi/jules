import React from 'react';
import Button from '../../components/Button';

const PageOne: React.FC = () => {
  return (
    <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button href="/">
        Back to Home
      </Button>
    </div>
  );
};

export default PageOne;
