import React, { useContext } from "react";
import { AppContext } from "../App";
import { MicroTask, Status } from "../models";

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
          <span>{microTask.name} </span>
          <span>{microTask.status === Status.Done ? "Done" : "Active"} </span>
          <span>{microTask.timeSpent} </span>
          <span>{microTask.timeBudget}</span>
        </div>
      ))}
    </div>
  );
};
