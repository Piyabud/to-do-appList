import React from "react";

function TaskButton({ onClick, children }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default TaskButton;
