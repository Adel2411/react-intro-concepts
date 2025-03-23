import React, { useState } from "react";

function ConditionalRenderingComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div className="concept-section">
      <h2>Conditional Rendering</h2>

      {/* Toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>

      {/* Method 1: if/else using variables */}
      {(() => {
        if (isLoggedIn) {
          return <p>Welcome back, User!</p>;
        } else {
          return <p>Please log in</p>;
        }
      })()}

      {/* Method 2: Ternary operator */}
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>

      {/* Method 3: Logical && operator */}
      {isLoggedIn && <p>This text only shows when logged in</p>}

      {/* Conditional Styling */}
      <div
        style={{
          padding: "10px",
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#333",
        }}
      >
        <p>Current theme: {theme}</p>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
      </div>

      {/* Complex conditional rendering */}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {count === 0 ? (
          <p>Count is zero</p>
        ) : count < 5 ? (
          <p>Count is less than 5</p>
        ) : (
          <p>Count is 5 or greater</p>
        )}
      </div>
    </div>
  );
}

export default ConditionalRenderingComponent;
