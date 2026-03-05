1️⃣ What is JSX, and why is it used?

Answer:

JSX means JavaScript XML. Its basically a syntax that lets you write HTML inside JavaScript.

In React, we use JSX becaus it makes the code look more readable and easy to understand.

 

2️⃣ What is the difference between State and Props?

Answer:

State and Props are two important concepts in React. They are different though.

🔹 Props

Props are used to pass data from parent component to child component.

Props are read-only, child component cannot modify them.

Example:

<Profile name="Moez" />

Here name is a prop.

🔹 State

State is internal data of a component.

State can change over time, and when it changes, React re-renders the component.

Example:

const [count, setCount] = useState(0);
🔹 Main Difference
Props	State
Come from parent	Internal to component
Read-only	Can be changed
Immutable	Mutable
Triggers re-render	Triggers re-render

Simply: Props are for receiveing data, State is for managing data.

3️⃣ What is the useState hook, and how does it work?

Answer:

useState is a Hook in React that lets you add state to functional components.

Syntax:

const [state, setState] = useState(initialValue);

Example:

const [count, setCount] = useState(0);

count is current value

setCount is function to update it

0 is initial value

When you call setCount(newValue), React re-renders the component automatically.

Note: State updates are async, so sometimes you may not see the updated value immediately.

4️⃣ How can you share state between components in React?

Answer:

There are few ways to share state in React:

1️⃣ Lifting State Up

If two components need the same state, put the state in the parent component and pass it down via props.

This is the most common way.

2️⃣ Context API

If a deeply nested component needs state, Context API can be used.

It avoids prop drilling.

3️⃣ State Management Libraries

For big projects, people use Redux, Zustand, or others.

For small projects, lifting state up is enough.

5️⃣ How is event handling done in React?

Answer:

React events are similar to normal HTML/JS events, but with some differences:

Event names are camelCase (onClick) instead of lowercase (onclick)

You pass a function, not a string

Example:

<button onClick={handleClick}>Click Me</button>

Function:

const handleClick = () => {
  console.log("Button clicked");
};

React also uses Synthetic Events, which are cross-browser compatible.

Example with prevent default:

const handleSubmit = (e) => {
  e.preventDefault();
};

So basically, React handles events via functions and JSX attributes.