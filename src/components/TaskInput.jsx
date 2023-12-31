import React, { useState } from "react";

function TaskInput({ data, onChange, onKeyDown }) {
  return (
    <div className="w-full md:w-[80%] ">
      <input
        type="text"
        placeholder="Enter your To do List.."
        value={data}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="
        placeholder-gray-400
         text-xl mb-2 md:mb-8
        w-[100%] py-[10px] px-[16px] rounded-md 
        border border-[#e4e6ed] border-solid
        focus:border-solid focus:border-2 focus:border-[#f47e20] focus:outline-none "
      />
    </div>
  );
}

export default TaskInput;
