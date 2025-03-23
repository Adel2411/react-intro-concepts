import React from "react";

// Parent component that uses the Child component
function PropsComponent({ name, hobby }) {
  return (
    <div className="concept-section">
      <h2>Props Concept</h2>
      <p>Props are passed from parent to child components</p>

      {/* Passing props to a child component */}
      <ChildComponent name={name} hobby={hobby} />

      {/* Passing different props */}
      <ChildComponent name="Another User" hobby="Reading" />
    </div>
  );
}

// Child component that receives props
function ChildComponent(props) {
  return (
    <div className="child-component">
      <p>Hello, {props.name}!</p>
      <p>I heard you like {props.hobby}</p>
    </div>
  );
}

export default PropsComponent;
