import React from "react";

function JSXBasics() {
  // JavaScript expressions in JSX
  const name = "React Learner";
  const number = 42;

  return (
    <div className="concept-section">
      <h2>JSX Basics</h2>

      {/* Basic JSX element */}
      <p>This is a JSX paragraph element</p>

      {/* Using JavaScript expressions within JSX */}
      <p>Hello, {name}!</p>
      <p>The answer is: {number}</p>
      <p>2 + 2 = {2 + 2}</p>

      {/* JSX attributes use camelCase */}
      <div className="note" style={{ color: "blue", marginTop: "10px" }}>
        In JSX, attributes use camelCase (className instead of class)
      </div>

      {/* JSX requires a single parent element */}
      <div>
        <p>JSX requires a single parent element</p>
        <p>
          Or you can use React Fragments: &lt;React.Fragment&gt; or &lt;&gt;
        </p>
      </div>
    </div>
  );
}

export default JSXBasics;
