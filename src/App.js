import React from 'react';
import Counter from './featureComponents/Counter';
import People from './featureComponents/People';

const App = () => {
  return (
    <div style={{ margin: '1em' }}>
      <Counter />
      <People />
    </div>
  );
};

export default App;
