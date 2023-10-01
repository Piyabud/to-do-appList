import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";
import TaskLists from "./components/TaskLists";

function App() {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState(() => {
    const getItemInLocalStorage = localStorage.getItem("todo");
    const parsedItem = JSON.parse(getItemInLocalStorage); //แปลง string เป็น JsonJS
    return parsedItem || [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const onChange = (e) => {
    setData(e.target.value);
  };

  const addTask = () => {
    let todoArraysObj = [...todos];
    todoArraysObj.push({ todo: data, isComplete: false });
    setTodos(todoArraysObj);
    localStorage.setItem("todo", JSON.stringify(todoArraysObj));
    setData(""); // เคลียร์ข้อมูลใน input
  };
  
  console.log(data);
  // console.log(todos);

  const deleteTask = (index) => {
    let todoArraysObj = [...todos];
    todoArraysObj.splice(index, 1);
    setTodos(todoArraysObj);
    localStorage.setItem("todo", JSON.stringify(todoArraysObj));
  };
  

  const completeTask = (index) => {
    let todoArraysObj = [...todos];
    todoArraysObj[index].isComplete = !todoArraysObj[index].isComplete;
    setTodos(todoArraysObj);
    localStorage.setItem("todo", JSON.stringify(todoArraysObj));
  };
  
  // const onKeypress = (e) => {
  //   if (e.key === "enter") {
  //     addTask(data);
  //     setData("");
  //   }
  // };

  function onKeyDown(e) {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        alert("Task list empty! Please input your to-dos.");
      } else {
        addTask(data);
        setData("");
      }
    }
  }
  return (
    <div className="w-full h-[100vh] bg-green-800 flex justify-center items-center">
      {/* BODY-AREA */}
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-4 text-xl bg-yellow-100 px-10 ">
        <div className="w-[calc(100vw/6)] flex justify-between gap-4 ">
          <TaskInput
            data={data}
            onChange={onChange}
            className=" h-2"
            onKeyDown={onKeyDown}
          />
          <TaskButton onClick={addTask}>Submit</TaskButton>
        </div>
        {/* DISPLAY */}
        <TaskLists
          todos={todos}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;
