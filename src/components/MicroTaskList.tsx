import React, { useContext } from "react";
import { AppContext } from "../App";
import { MicroTask } from "../models";

export const MicroTaskList = () => {
  const { microTasks, selectedTaskId, handleMicroTaskClick } =
    useContext(AppContext);

  // Filter out microtasks that are not associated with the selected task
  const filteredMicroTasks = microTasks.filter(
    (microTask: MicroTask) => microTask.taskId === selectedTaskId
  );

  return (
    <div>
      {filteredMicroTasks.map((microTask: MicroTask) => (
        <div
          key={microTask.id}
          id={`microtask-${microTask.id}`}
          onClick={() => handleMicroTaskClick(microTask.id)}
        >
          {microTask.name}
        </div>
      ))}
    </div>
  );
};
