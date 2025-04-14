import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0); // state and setter

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );

}

export default Counter;
