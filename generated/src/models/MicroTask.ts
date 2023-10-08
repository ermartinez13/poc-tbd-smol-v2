// Import the 'Status' enum from 'Task.ts' file
import { Status } from './Task';

// Define the 'MicroTask' model
export class MicroTask {
  id: string; // auto-generated uuid
  name: string;
  taskId: string;
  status: Status; // default value of Status.Active
  timeBudget: number; // default value is parent task's default micro budget value
  timeSpent: number; // default value of 0

  constructor(id: string, name: string, taskId: string, timeBudget: number, timeSpent: number = 0, status: Status = Status.Active) {
    this.id = id;
    this.name = name;
    this.taskId = taskId;
    this.timeBudget = timeBudget;
    this.timeSpent = timeSpent;
    this.status = status;
  }
}
