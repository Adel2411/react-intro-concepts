import React, { useState, useEffect } from "react";

function EffectComponent() {
  const [count, setCount] = useState(0);

  // Effect that runs when count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="effect-demo">
      <h2>useEffect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Check the page title after clicking the button</p>
    </div>
  );
}

export default EffectComponent;
