import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";

function App() {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setData(e.target.value);
  };

  const addTask = () => {
    let todoArraysObj = [...todos];
    todoArraysObj.push({ todo: data, isComplete: false });
    setTodos(todoArraysObj);
  };
  // console.log(data);
  // console.log(todos);
  return (
    <div className="w-full h-[300px] bg-green-800 flex justify-center items-center">
      {/* BODY-AREA */}
      <div className="w-1/2 h-1/2 flex justify-center items-center gap-4 text-xl bg-yellow-100">
        <TaskInput data={data} onChange={onChange} className=" h-2" />
        <TaskButton onClick={addTask}>Submit</TaskButton>
        {/* DISPLAY */}
        {todos.map((todo, index) => (
          <div className="" key={index}>
            {/* CHECKBOX */}
            <div className="">&#x2714</div>
            {/* TODOS DIS */}
            <div className="">{todo.todo}</div>
            {/* DISPLAY */}
            <div className="">delete</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
