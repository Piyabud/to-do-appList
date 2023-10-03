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
    <div className=" w-full flex flex-col gap-4 justify-between ">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`${
            todo.isComplete ? "line-through text-gray-500 font-semibold" : ""
          } `}
        >
          {editIndex === index ? (
            <div className=" flex flex-row w-full justify-between items-center gap-[12px]">
              <div className=" flex-grow">
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                  className=" py-[10px] px-[16px] w-[100%] md:w-[75%] rounded-md 
                        border border-[#e4e6ed] border-solid
                        focus:border-none focus:border focus:border-[#f47e20] "
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const updatedTodos = [...todos];
                      updatedTodos[index].todo = editData;
                      setEditIndex(null);
                      setEditData("");
                      localStorage.setItem(
                        "todo",
                        JSON.stringify(updatedTodos)
                      );
                    } else if (e.key === "Escape") {
                      setEditIndex(null);
                      setEditData("");
                    }
                  }}
                />
              </div>
              {/* BTN EDIT FORM */}
              <div className="flex gap-[4px] md:gap-[10px]">
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
            <div className="flex items-center justify-between ">
              <div className=" flex-grow flex justify-start items-center ">
                {/* CHECKBOX */}
                <input
                  className="w-[18px] h-[18px] mr-4"
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => completeTask(index)}
                />

                {/* TITLE */}
                <span
                  className={` ${
                    todo.isComplete
                      ? " text-gray-500 font-semibold"
                      : "text-[#f47e20]"
                  }`}
                >
                  <div
                    className="w-[180px] sm:w-full inline-block text-xl "
                    style={{ overflowWrap: "break-word" }}
                  >
                    {todo.todo}
                  </div>
                </span>
              </div>

              {/* BTN DEL EDIT */}
              <div className="">
                <div className="flex flex-row justify-end items-center gap-[8px] md:gap-6">
                  {todo.isComplete ? null : (
                    <button
                      className="btn-img "
                      onClick={() => editTask(index)}
                    >
                      <img
                        src="../../public/file-edit.svg"
                        alt=""
                        className="w-[22px] h-[22px]"
                      />
                    </button>
                  )}

                  <button onClick={() => deleteTask(index)} className="btn-img">
                    <img
                      src="../../public/trash.svg"
                      alt=""
                      className="w-[22px] h-[22px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default TaskLists;
