import React, { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();
const GlobalState = ({ children }) => {
  const initialState = {
    list: [
      { id: Math.random(), text: "defined but never used", checked: false },
      {
        id: Math.random(),
        text: "img elements must have an alt",
        checked: true
      },
      {
        id: Math.random(),
        text: "either with meaningful text",
        checked: false
      },
      {
        id: Math.random(),
        text: "or an empty string for decorative images",
        checked: false
      }
    ]
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
