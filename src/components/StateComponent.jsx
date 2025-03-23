import React, { useState } from "react";

function StateComponent() {
  // useState hook for a counter
  const [count, setCount] = useState(0);

  // useState with a string
  const [message, setMessage] = useState("Hello React!");

  return (
    <div className="concept-section">
      <h2>State Concept</h2>
      <p>State allows components to manage changing data</p>

      <div className="state-example">
        <h3>Counter Example:</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="state-example">
        <h3>Text Example:</h3>
        <p>{message}</p>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

export default StateComponent;
