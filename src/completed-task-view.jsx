import React, { useContext } from "react";
import { UserContext } from "./App";

const CompletedTaskview = () => {
  const { username, completedTask } = useContext(UserContext);
  return (
    <div>
      {username}さんは{completedTask}個のタスクを完了しました
    </div>
  );
};

export default CompletedTaskview;
