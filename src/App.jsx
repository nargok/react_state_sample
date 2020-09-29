import React, { useState, useCallback, createContext } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import CompletedTaskview from "./completed-task-view";
import Todo from "./todo";

const store = createStore(rootReducer);

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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
