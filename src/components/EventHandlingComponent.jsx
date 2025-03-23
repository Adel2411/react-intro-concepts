import React, { useState } from "react";

function EventHandlingComponent() {
  const [message, setMessage] = useState("");

  // Basic event handler
  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  // Event handler with parameter
  const handleGreet = (name) => {
    setMessage(`Hello, ${name}!`);
  };

  // Event handler with event object
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Prevent default behavior
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessage("Form submitted!");
  };

  return (
    <div className="concept-section">
      <h2>Event Handling</h2>

      <div className="event-example">
        {/* Basic click event */}
        <button onClick={handleClick}>Click Me</button>

        {/* Event with arguments */}
        <button onClick={() => handleGreet("React Learner")}>Greet Me</button>

        {/* Using event object */}
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Type something..."
        />

        {/* Preventing default behavior */}
        <form onSubmit={handleFormSubmit}>
          <button type="submit">Submit Form</button>
        </form>

        <p>Message: {message}</p>
      </div>
    </div>
  );
}

export default EventHandlingComponent;
