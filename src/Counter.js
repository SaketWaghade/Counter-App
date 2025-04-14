import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // State for counter

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>➖ Decrement</button>
    </div>
  );
}

export default Counter;
