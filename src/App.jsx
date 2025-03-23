import React, { useState } from "react";
import JSXBasics from "./components/JSXBasics";
import PropsComponent from "./components/PropsComponent";
import StateComponent from "./components/StateComponent";
import EventHandlingComponent from "./components/EventHandlingComponent";
import ConditionalRenderingComponent from "./components/ConditionalRenderingComponent";
import ListsComponent from "./components/ListsComponent";
import FormComponent from "./components/FormComponent";
import "./App.css";
import EffectComponent from "./components/EffectComponent";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <h1>React Learning App</h1>

      {/* Navigation Bar */}
      {/* TODO: Turn This into a Layout component */}
      <div className="nav-bar">
        <button onClick={() => setSelected("jsx")}>JSX Basics</button>
        <button onClick={() => setSelected("props")}>Props</button>
        <button onClick={() => setSelected("state")}>State</button>
        <button onClick={() => setSelected("effects")}>Effects</button>
        <button onClick={() => setSelected("events")}>Event Handling</button>
        <button onClick={() => setSelected("conditional")}>
          Conditional Rendering
        </button>
        <button onClick={() => setSelected("lists")}>Lists</button>
        <button onClick={() => setSelected("forms")}>Forms</button>
      </div>

      {/* Content */}
      <div className="content">
        {selected === "jsx" && <JSXBasics />}
        {selected === "props" && (
          <PropsComponent name="Learner" hobby="Coding" />
        )}
        {selected === "state" && <StateComponent />}
        {selected === "effects" && <EffectComponent />}
        {selected === "events" && <EventHandlingComponent />}
        {selected === "conditional" && <ConditionalRenderingComponent />}
        {selected === "lists" && <ListsComponent />}
        {selected === "forms" && <FormComponent />}
        {!selected && <p>Please select a concept to learn</p>}
      </div>
    </div>
  );
}

export default App;
