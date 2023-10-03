import React from "react";

function TaskButton({ onClick, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="btn w-full px-[16px] py-[10px] rounded-lg border-none  "
      >
        {children}
      </button>
    </div>
  );
}

export default TaskButton;
