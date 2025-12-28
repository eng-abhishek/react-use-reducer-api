import React from "react";
import { useReducer } from "react";

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

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Counter {state.count} </h2>
        <br />
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
        <br />
        <br />
      </div>
    </>
  );
}
