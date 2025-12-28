## useReducer Hook in React (Simple & Practical Guide)

#### The useReducer hook is an alternative to useState that is best for complex state logic, especially when:

State depends on previous state

You have multiple related state values

You want predictable state updates (like Redux, but lighter)

1️⃣ What is useReducer?

useReducer manages state using a reducer function.

👉 It works on the concept of:

State

Action

Reducer (function)

Syntax
const [state, dispatch] = useReducer(reducer, initialState);

2️⃣ Reducer Function Structure

function reducer(state, action) {
switch (action.type) {
case 'ACTION_NAME':
return newState;
default:
return state;
}
}

state → current state

action → object that describes what happened

dispatch(action) → triggers state change

3️⃣ Simple Counter Example
Example: Counter with useReducer
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
switch (action.type) {
case "INCREMENT":
return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;

}
}

export default function Counter() {
const [state, dispatch] = useReducer(reducer, initialState);

return (

<div>
<h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>

);
}

4️⃣ useReducer with Payload (Passing Data)
dispatch({ type: "ADD", payload: 5 });

Reducer:

case "ADD":
return { count: state.count + action.payload };

5️⃣ useReducer vs useState
Feature useState useReducer
Simple state ✅ Best ❌ Overkill
Complex logic ❌ Hard ✅ Best
Multiple state changes ❌ Messy ✅ Clean
Predictable updates ❌ ✅

6️⃣ When Should You Use useReducer?

✔ Complex form handling
✔ Multiple actions on same state
✔ State logic reused in many components
✔ Redux-like pattern without Redux

7️⃣ useReducer + useContext (Global State)

Often used together for global state management:

const [state, dispatch] = useReducer(reducer, initialState);

👉 Share state & dispatch via Context API.

(You recently asked about useContext, so this combo is very useful for you 👍)

8️⃣ Real-Life Example Use Cases

Shopping cart (add/remove/update items)

Authentication state

Form validation

Dashboard filters

9️⃣ Key Points to Remember

Reducer must be pure function

Do not mutate state

Always return a new state object

Actions are just plain objects
