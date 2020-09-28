import React from "react";

const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      const newTodos = [...state.todos];
      newTodos.push({ id: state.todos.length + 1, task: action.payload });
      return {
        ...state,
        todos: newTodos,
      };
    case "complete_task":
      const filteredTodos = [...state.todos];
      filteredTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      throw new Error();
  }
};

const Todo = () => <div>Hello</div>;

export default Todo;
