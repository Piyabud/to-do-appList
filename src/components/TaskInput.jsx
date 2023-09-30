import React, { useState } from "react";

function TaskInput({ data, onChange }) {
  return (
    <div>
      <input type="text" value={data} onChange={onChange} className=" bg-black"/>
    </div>
  );
}

export default TaskInput;
