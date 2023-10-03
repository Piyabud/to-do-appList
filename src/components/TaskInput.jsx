import React, { useState } from "react";

function TaskInput({ data, onChange, onKeyDown }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={data}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-[100%] py-[10px] px-[16px] rounded-md 
        border border-[#e4e6ed] border-solid
        focus:border-solid focus:border focus:border-[#f47e20] "
      />
    </div>
  );
}

export default TaskInput;
