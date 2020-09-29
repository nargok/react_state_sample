import React, { useState, useCallback, useContext } from "react";
import { UserContext } from "./App";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [input, updateInput] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  console.log(todos);

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
    [dispatch, handleUpdateCompletedTask]
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
        {todos.map((todo, index) => (
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
