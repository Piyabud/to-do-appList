import React from "react";

function TaskLists({ todos, deleteTask, completeTask }) {
  return (
    <div>
      <div className="flex flex-col w-full justify-start  py-4 px-20 border border-blue-800 border-solid">
        {todos.map((todo, index) => (
          <div className="flex flex-row justify-between gap-6" key={index}>
            {/* CHECKBOX */}
            <div className="border border-blue-800 border-solid  p-2  ">
              <input type="checkbox" onClick={() => completeTask(index)} />
            </div>
            {/* LIST */}
            <div
              className={`border border-blue-800 border-solid py-2 grow ${
                todo.isComplete ? "line-through text-orange-400" : ""
              }`}
            >
              {todo.todo}
            </div>
            {/* BUTTON */}
            <div className="border border-blue-800 border-solid flex justify-end p-2">
              <button className=" bg-transparent border-none">
                <img src="../public/edit.svg" alt="" />
              </button>
              <button className=" bg-transparent border-none">
                <img
                  src="../public/delete.svg"
                  alt=""
                  onClick={() => {
                    deleteTask(index);
                  }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TaskLists;
