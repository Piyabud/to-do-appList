import React from "react";

function TaskButton({ onClick, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="hidden w-full px-[16px] py-[10px] rounded-lg border-none md:block "
      >
        {children}
      </button>
    </div>
  );
}

export default TaskButton;
