import React, { useState } from "react";

function FormComponent() {
  // State for form fields
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "5",
    subscribe: false,
  });

  // State for form submission
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Simple validation
  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = "Name is required";
    if (!formState.email) newErrors.email = "Email is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formState);
    }
  };

  // Reset form
  const resetForm = () => {
    setSubmitted(false);
    setFormState({
      name: "",
      email: "",
      feedback: "",
      rating: "5",
      subscribe: false,
    });
  };

  return (
    <div className="workshop-project">
      <h2>Feedback Form</h2>

      {submitted ? (
        <div className="success-message">
          <h3>Thank you for your feedback!</h3>
          <p>Name: {formState.name}</p>
          <p>Email: {formState.email}</p>
          <p>Rating: {formState.rating}/5</p>
          <p>Feedback: {formState.feedback}</p>
          <p>
            Newsletter: {formState.subscribe ? "Subscribed" : "Not subscribed"}
          </p>
          <button onClick={resetForm}>Submit Another Response</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Your Feedback:</label>
            <textarea
              name="feedback"
              value={formState.feedback}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Rate your experience (1-5):</label>
            <select
              name="rating"
              value={formState.rating}
              onChange={handleChange}
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={formState.subscribe}
                onChange={handleChange}
              />
              Subscribe to our newsletter
            </label>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      )}

      <div className="react-concepts">
        <h3>React Concepts Used:</h3>
        <ul>
          <li>useState hook for managing form state</li>
          <li>Event handling (onChange, onSubmit)</li>
          <li>Conditional rendering</li>
          <li>Form validation</li>
          <li>Controlled components</li>
        </ul>
      </div>
    </div>
  );
}

export default FormComponent;
