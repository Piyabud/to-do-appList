import React, { useState } from "react";

function TaskInput({ data, onChange, onKeyDown }) {
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className=""
      />
    </div>
  );
}

export default TaskInput;
