import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  return (
    <div style={{ margin: '1em' }}>
      <h1>Current count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <button onClick={() => setCount(count + -1)}>DECREMENT</button>
    </div>
  );
};

export default App;
