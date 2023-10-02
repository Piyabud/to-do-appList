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
    <div className="">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`flex flex-col justify-start items-center ${
            todo.isComplete ? "line-through text-gray-400" : ""
          } `}
        >
          {editIndex === index ? (
            <div className=" flex flex-row justify-start items-center gap-[6px]">
              <div className="">
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                  className=" relative  flex-3 py-[10px] px-[16px] rounded-md 
                border border-[#e4e6ed] border-solid
                 focus:border-none focus:border focus:border-[#f47e20] "
                />
              </div>
              <div className="flex gap-[4px] ">
                <button
                  className="text-[12px] py-[12px] px-[8px] rounded-lg border-none"
                  onClick={() => {
                    const updatedTodos = [...todos];
                    updatedTodos[index].todo = editData;
                    setEditIndex(null);
                    setEditData("");
                    localStorage.setItem("todo", JSON.stringify(updatedTodos));
                  }}
                >
                  ✔️
                </button>
                <button
                  className="text-[12px] py-[12px] px-[8px] rounded-lg border-none"
                  onClick={() => {
                    setEditIndex(null);
                    setEditData("");
                  }}
                >
                  ❌
                </button>
              </div>
            </div>
          ) : (
            <div className="bd-check3  flex items-center ">
              {/* CHECKBOX */}
              <input
                className="w-[18px] h-[18px]"
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => completeTask(index)}
              />

              {/* TITLE */}
              <span className="bd-check2 text-xl ">{todo.todo}</span>
              {/* BTN DEL EDIT */}
              <div className="flex flex-row justify-end items-center gap-[4px]">
                <button className="btn-img " onClick={() => editTask(index)}>
                  <img
                    src="../../public/file-edit.svg"
                    alt=""
                    className="w-[22px] h-[22px]"
                  />
                </button>
                <button onClick={() => deleteTask(index)} className="btn-img">
                  <img
                    src="../../public/trash.svg"
                    alt=""
                    className="w-[22px] h-[22px]"
                  />
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
