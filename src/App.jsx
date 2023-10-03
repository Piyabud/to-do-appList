import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskButton from "./components/TaskButton";
import TaskLists from "./components/TaskLists";
import SnackBar from "./components/Snackbar";

function App() {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState(() => {
    const getItemInLocalStorage = localStorage.getItem("todo");
    const parsedItem = JSON.parse(getItemInLocalStorage); //แปลง string เป็น JsonJS
    return parsedItem || [];
  });

  const [editData, setEditData] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const onChange = (e) => {
    setData(e.target.value);
  };

  const addTask = () => {
    if (data.trim() === "") {
      displaySnackbar("Task list empty! Please input your to-dos.", "warning");
      return;
    }
    let todoArraysObj = [...todos];
    todoArraysObj.push({ todo: data, isComplete: false });
    setTodos(todoArraysObj);
    localStorage.setItem("todo", JSON.stringify(todoArraysObj));
    setData(""); // เคลียร์ข้อมูลใน input
  };

  const deleteTask = (index) => {
    let todoArraysObj = [...todos];
    todoArraysObj.splice(index, 1);
    setTodos(todoArraysObj);
    localStorage.setItem("todo", JSON.stringify(todoArraysObj));
  };

  const completeTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isComplete = !updatedTodos[index].isComplete;
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        displaySnackbar(
          "Task list empty! Please input your to-dos.",
          "warning"
        );
      } else {
        addTask(data);
        setData("");
      }
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditData(todos[index].todo);
  };
  function displaySnackbar(message, status) {
    setOpenSnackBar(false);
    setSnackbarMes(message);
    setSnackbarStatus(status);
    setOpenSnackBar(true);
  }
  const [openSnackbar, setOpenSnackBar] = useState(false);
  const [snackBarMes, setSnackbarMes] = useState("");
  const [snackbarStatus, setSnackbarStatus] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };
  return (
    <>
      <SnackBar
        open={openSnackbar}
        onClose={handleClose}
        severity={snackbarStatus}
        message={snackBarMes}
      />
      <div className="w-full h-[100vh] p-10 bg-green-800 overflow-auto ">
        {/* BODY-AREA */}
        <div className="text-xl bg-pink-500 px-[10px] py-[30px] ">
          <div className="flex justify-center mb-8 uppercase ">
            <h1 className="text-3xl font-extrabold">To do List App</h1>
          </div>
          <div className="w-auto mb-10  md:gap-2 ">
            <TaskInput
              data={data}
              onChange={onChange}
              className=""
              onKeyDown={onKeyDown}
            />
            <TaskButton onClick={addTask}>Submit</TaskButton>
          </div>
          {/* DISPLAY */}
          <TaskLists
            todos={todos}
            deleteTask={deleteTask}
            completeTask={completeTask}
            editTask={editTask}
            editIndex={editIndex} // เพิ่ม prop editIndex
            editData={editData} // เพิ่ม prop editData
            setEditData={setEditData}
            setEditIndex={setEditIndex}
          />
        </div>
      </div>
    </>
  );
}

export default App;
