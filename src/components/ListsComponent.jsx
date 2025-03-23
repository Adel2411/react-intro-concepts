import React, { useState } from "react";

function ListsComponent() {
  const [items, setItems] = useState([
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Build a project", completed: false },
    { id: 3, name: "Deploy application", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  // Toggle item completion
  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // Get filtered items
  const getFilteredItems = () => {
    switch (filter) {
      case "completed":
        return items.filter((item) => item.completed);
      case "active":
        return items.filter((item) => !item.completed);
      default:
        return items;
    }
  };

  return (
    <div className="concept-section">
      <h2>Lists and Keys</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <p>Current filter: {filter}</p>
      </div>

      {/* Rendering lists with keys */}
      <ul style={{ textAlign: "left" }}>
        {getFilteredItems().map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      {/* Empty list handling */}
      {getFilteredItems().length === 0 && (
        <p>No items match the current filter</p>
      )}

      {/* Demonstration of why keys are important */}
      <div className="keys-explanation">
        <p>
          Each item needs a unique "key" prop to help React identify which items
          change
        </p>
        <p>
          Without keys, React might re-render the entire list instead of just
          what changed
        </p>
      </div>
    </div>
  );
}

export default ListsComponent;
