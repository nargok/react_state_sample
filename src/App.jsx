import React, { useState, useCallback, createContext } from "react";
import CompletedTaskview from "./completed-task-view";
import Todo from "./todo";

export const UserContext = createContext({
  username: "guest",
  completedTask: 0,
  handleUpdateCompleteTask: () => {},
});

const App = () => {
  const [username, updateUsername] = useState("guest");
  const [completedTask, updateCompletedTask] = useState(0);

  const handleUpdateUsername = useCallback(
    (event) => {
      updateUsername(event.target.value);
    },
    [updateUsername]
  );

  const handleUpdateCompletedTask = useCallback(
    (event) => {
      updateCompletedTask(completedTask + 1);
    },
    [completedTask, updateCompletedTask]
  );

  return (
    <UserContext.Provider
      value={{ username, completedTask, handleUpdateCompletedTask }}
    >
      <div>
        <span>ユーザーネーム:</span>
        <input type="text" onChange={handleUpdateUsername} />
        <CompletedTaskview />
        <Todo />
      </div>
    </UserContext.Provider>
  );
};

export default App;
