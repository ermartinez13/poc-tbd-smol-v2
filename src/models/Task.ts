// Enum to represent the status of a task
export enum Status {
  Done = 'done',
  Active = 'active',
}

// Model for a task
export class Task {
  id: string; // auto-generated uuid
  name: string;
  status: Status; // default value of Status.Active
  defaultMicroBudget: number;
  timeSpent: number; // default value of 0, value is the sum of all its child microtasks’ time spent properties
  timeBudget: number; // default value of 0

  constructor(id: string, name: string, defaultMicroBudget: number, timeBudget: number) {
    this.id = id;
    this.name = name;
    this.status = Status.Active;
    this.defaultMicroBudget = defaultMicroBudget;
    this.timeBudget = timeBudget;
    this.timeSpent = 0;
  }
}
