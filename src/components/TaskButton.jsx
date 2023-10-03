import React from "react";

function TaskButton({ onClick, children }) {
  return (
    <div className="flex justify-center w-full items-start md:w-[20%] ">
      <button
        type="button"
        onClick={onClick}
        className=" w-[100%] px-[14px] py-[10px] rounded-lg border-none text-xl hover:border-2 hover:border-solid hover:border-[#f47e20] "
      >
        {children}
      </button>
    </div>
  );
}

export default TaskButton;
