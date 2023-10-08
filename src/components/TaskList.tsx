import React from "react";
import { Task, Status } from "../models";

interface TaskListProps {
  tasks: Task[];
  selectedTaskId: string;
  handleTaskClick: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  selectedTaskId,
  handleTaskClick,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          id={`task-${task.id}`}
          className={`task ${selectedTaskId === task.id ? "selected" : ""}`}
          onClick={() => handleTaskClick(task.id)}
        >
          <span>{task.name} </span>
          <span>{task.status === Status.Done ? "Done" : "Active"} </span>
          <span>{task.defaultMicroBudget} </span>
          <span>{task.timeSpent} </span>
          <span>{task.timeBudget}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
