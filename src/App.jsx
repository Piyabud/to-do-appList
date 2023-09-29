import React from "react";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";

function App() {
  const addTask = () => {};
  return (
    <div>
      <TaskInput />
      <TaskButton onClick={addTask}>Submit</TaskButton>
    </div>
  );
}

export default App;
