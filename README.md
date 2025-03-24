# React Core Concepts Interactive Guide

This repository contains an interactive application designed to teach fundamental React concepts through practical examples. Each concept is implemented as a separate, well-documented component, allowing learners to study one concept at a time.

## Table of Contents

- [Overview](#overview)
- [Core React Concepts](#core-react-concepts)
  - [JSX Basics](#jsx-basics)
  - [Props](#props)
  - [State](#state)
  - [Effects](#effects)
  - [Event Handling](#event-handling)
  - [Conditional Rendering](#conditional-rendering)
  - [Lists and Keys](#lists-and-keys)
  - [Forms](#forms)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)

## Overview

This application serves as an educational tool for learning React fundamentals. It provides a hands-on approach to understanding React concepts through interactive examples and clearly documented code. Each component demonstrates a specific React concept with practical examples and explanations.

## Core React Concepts

### JSX Basics

The JSX Basics component demonstrates:

- Basic JSX syntax and structure
- JavaScript expressions within JSX using curly braces `{}`
- JSX attributes using camelCase (like `className` instead of `class`)
- JSX requirement for a single parent element
- Inline styling with JSX

### Props

The Props component demonstrates:

- Passing data from parent to child components
- Different methods of receiving and using props
- Composition pattern with `children` props
- Component reusability

### State

The State component demonstrates:

- Using the `useState` hook for local component state
- Updating state with state setter functions
- State with different data types (numbers, strings)
- Handling user interactions to change state

### Effects

The Effects component demonstrates:

- Using the `useEffect` hook to handle side effects
- Controlling when effects run with the dependency array
- Practical use cases like updating the document title
- Synchronizing component state with side effects

### Event Handling

The Event Handling component demonstrates:

- Basic click event handlers
- Passing parameters to event handlers
- Working with form events
- Using the event object
- Preventing default browser behavior

### Conditional Rendering

The Conditional Rendering component demonstrates:

- Different techniques for conditional rendering in React
- Using if/else statements with self-invoking functions
- Using ternary operators for inline conditions
- Using logical AND (`&&`) for simple conditions
- Implementing conditional styling
- Complex conditional logic

### Lists and Keys

The Lists component demonstrates:

- Rendering arrays of data
- The importance of the `key` prop for list items
- Filtering and transforming lists
- Handling empty lists
- List item interaction

### Forms

The Forms component demonstrates:

- Creating controlled form components
- Managing complex form state
- Form validation and error handling
- Working with different input types
- Form submission
- Displaying form results

## Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── JSXBasics.jsx             # JSX syntax examples
│   │   ├── PropsComponent.jsx        # Component props demonstrations
│   │   ├── StateComponent.jsx        # useState hook examples
│   │   ├── EffectComponent.jsx       # useEffect hook examples
│   │   ├── EventHandlingComponent.jsx # Event handling patterns
│   │   ├── ConditionalRenderingComponent.jsx # Conditional rendering techniques
│   │   ├── ListsComponent.jsx        # List rendering and keys
│   │   └── FormComponent.jsx         # Form handling in React
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application styles
│   └── main.jsx                      # Entry point
└── index.html                        # HTML template
```

## Installation

To set up this project locally:

```bash
# Clone the repository
git clone https://github.com/Adel2411/react-intro-concepts.git

# Navigate to the project directory
cd react-intro-concepts

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:5173/`.

The app features a navigation bar at the top with buttons for each React concept. Click any concept button to view its implementation and interact with it. The selected concept will be displayed in the content area below the navigation bar.

If no concept is selected, you'll see a prompt asking you to select one.
