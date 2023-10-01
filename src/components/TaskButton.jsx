import React from "react";

function TaskButton({ onClick, children }) {
  return (
    <div>
      <button type="button" onClick={onClick} className="btn py-[12px] px-[16px] " >
        {children}
      </button>
    </div>
  );
}

export default TaskButton;
