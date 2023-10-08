import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Status } from '../models/Task';
import { Status as MicroStatus } from '../models/MicroTask';

const TaskCreateForm = () => {
  const [name, setName] = useState('');
  const [defaultMicroBudget, setDefaultMicroBudget] = useState(0);
  const [timeBudget, setTimeBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: uuidv4(),
      name,
      status: Status.Active,
      defaultMicroBudget,
      timeSpent: 0,
      timeBudget,
    };

    // Dispatch the TASK_CREATED event with the task object
    window.dispatchEvent(new CustomEvent('TASK_CREATED', { detail: task }));

    // Reset form fields
    setName('');
    setDefaultMicroBudget(0);
    setTimeBudget(0);
  };

  return (
    <form id="task-create-form" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Task Name" required />
      <input type="number" value={defaultMicroBudget} onChange={e => setDefaultMicroBudget(e.target.value)} placeholder="Default MicroTask Budget" required />
      <input type="number" value={timeBudget} onChange={e => setTimeBudget(e.target.value)} placeholder="Time Budget" required />
      <button type="submit">Create Task</button>
    </form>
  );
};


const MicroTaskCreateForm = ({ taskId }) => {
  const [name, setName] = useState('');
  const [timeBudget, setTimeBudget] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const microTask = {
      id: uuidv4(),
      name,
      taskId,
      status: MicroStatus.Active,
      timeBudget,
      timeSpent: 0,
    };

    // Dispatch the MICROTASK_CREATED event with the microTask object
    window.dispatchEvent(new CustomEvent('MICROTASK_CREATED', { detail: microTask }));

    // Reset form fields
    setName('');
    setTimeBudget(0);
  };

  return (
    <form id="microtask-create-form" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="MicroTask Name" required />
      <input type="number" value={timeBudget} onChange={e => setTimeBudget(e.target.value)} placeholder="Time Budget" required />
      <button type="submit">Create MicroTask</button>
    </form>
  );
};

export { TaskCreateForm, MicroTaskCreateForm };
