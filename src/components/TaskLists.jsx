import React from "react";

function TaskLists({
  todos,
  deleteTask,
  completeTask,
  editTask,
  editIndex,
  editData,
  setEditData,
  setEditIndex,
}) {
  return (
    <div className="w-full h-full flex flex-col gap-4 bd-check1">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`flex justify-between items-center ${
            todo.isComplete ? "line-through text-gray-400" : ""
          } `}
        >
          {editIndex === index ? (
            <div className="w flex flex-row justify-between items-center gap-10">
              <input
                type="text"
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
                className="flex-3"
              />
              <div className="flex justify-center items-center gap-4 flex-1">
                <button
                  className="btn"
                  onClick={() => {
                    const updatedTodos = [...todos];
                    updatedTodos[index].todo = editData;
                    setEditIndex(null);
                    setEditData("");
                    localStorage.setItem("todo", JSON.stringify(updatedTodos));
                  }}
                >
                  Save
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setEditIndex(null);
                    setEditData("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-between">
              <input
                className="border-2 border-red-500 border-dotted"
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => completeTask(index)}
              />
              <span className="grow border-2 border-red-500 border-solid">
                {todo.todo}
              </span>
              <div className="flex flex-row gap-4 justify-end items-center">
                <button className="btn-img" onClick={() => editTask(index)}>
                  <img src="../../public/file-edit.svg" alt="" />
                </button>
                <button onClick={() => deleteTask(index)} className="btn-img">
                  <img src="../../public/trash.svg" alt="" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default TaskLists;
