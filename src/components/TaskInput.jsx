import React, { useState } from "react";

function TaskInput() {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
    </div>
  );
}

export default TaskInput;
