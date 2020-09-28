import React, { useState, useCallback, useReducer, useContext } from "react";
import { UserContext } from "./App";

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

const Todo = () => {
  const [input, updateInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleUpdateCompletedTask } = useContext(UserContext);

  const onChangeInput = useCallback(
    (event) => {
      updateInput(event.target.value);
    },
    [updateInput]
  );

  const onCheckListItem = useCallback(
    (event) => {
      dispatch({ type: "complete_task", payload: event.target.name });
      handleUpdateCompletedTask();
    },
    [handleUpdateCompletedTask]
  );

  const addTodo = useCallback(() => {
    dispatch({ type: "add_todo", payload: input });
    updateInput("");
  }, [input, dispatch]);

  return (
    <>
      <input type="text" onChange={onChangeInput} value={input} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={todo.id}>
            <input type="checkbox" onChange={onCheckListItem} name={index} />
            {todo.task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
