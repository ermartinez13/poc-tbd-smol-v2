# Project Plan

## File structure

```yaml
- src
  - components
    - TaskList.tsx
    - MicroTaskList.tsx
    - Timer.tsx
    - BarGraph.tsx
    - CreateForm.tsx
  - models
    - Task.ts
    - MicroTask.ts
  - App.tsx
  - index.tsx
- public
  - index.html
- package.json
- tsconfig.json
```

## File Descriptions

### `Task.ts`

This file exports the `Task` model and `Status` enum. It contains the properties `id`, `name`, `status`, `defaultMicroBudget`, `timeSpent`, and `timeBudget`.

### `MicroTask.ts`

This file exports the `MicroTask` model and inherits `Status` enum from `Task.ts`. It contains the properties `id`, `name`, `taskId`, `status`, `timeBudget`, and `timeSpent`.

### `TaskList.tsx`

This component exports a function `TaskList()` which returns a list of tasks. Each task is represented as a row with id `task-{taskId}`. When a task row is clicked, it updates the `selectedTaskId` state in the `App.tsx`.

### `MicroTaskList.tsx`

This component exports a function `MicroTaskList()` which returns a list of microtasks associated with the selected task. Each microtask is represented as a row with id `microtask-{microtaskId}`. When a microtask row is clicked, it updates the `selectedMicroTaskId` state in the `App.tsx`.

### `Timer.tsx`

This component exports a function `Timer()` which displays the timer related to the selected microtask. The timer has the id `timer`, and its associated buttons have ids `start-button`, `stop-button`, `extend-button`, `reset-button`, and `complete-button`. The component also manipulates `timeElapsed`, `timeBudget`, and `isActive` states.

### `BarGraph.tsx`

This component exports a function `BarGraph()` which displays a bar graph representation of time spent versus time budget on tasks. The graph has the id `bar-graph`.

### `CreateForm.tsx`

This component exports two functions, `TaskCreateForm()` and `MicroTaskCreateForm()`. They display forms that have ids `task-create-form` and `microtask-create-form`. The forms capture task and microtask details on submission, then update the tasks' and microtasks' arrays in the `App.tsx` state.

### `App.tsx`

This file exports the main `App` component. It manages global states such as `tasks`, `microTasks`, `selectedTaskId`, and `selectedMicroTaskId`. It also handles saving and loading data from local storage.

### `index.tsx`

This is the entry point of the app. It imports and renders the `App` component.

## Function Descriptions

### `handleTaskClick(taskId)`

This function is called when a task is clicked in `TaskList`. It sets the `selectedTaskId` in `App.tsx`.

### `handleMicroTaskClick(microTaskId)`

This function is called when a microtask is clicked in `MicroTaskList`. It sets the `selectedMicroTaskId` in `App.tsx`.

### `handleStart(), handleStop(), handleExtend(), handleReset(), handleComplete()`

These functions handle the respective actions of the timer in `Timer.tsx`.

### `handleSubmitTaskForm(), handleSubmitMicroTaskForm()`

These functions handle the form submissions in `CreateForm.tsx`. They update the `tasks` and `microTasks` states in `App.tsx` and reset the forms.

### `saveData(), loadData()`

These functions handle saving and loading data to/from local storage in `App.tsx`.

### `handleKeyDown(event)`

This function listens to the keydown event. If the key pressed is 't' or 'm', it triggers the task or microtask create form in `App.tsx`. 

## Message Names

- `TASK_SELECTED`: dispatched when a task is selected in `TaskList`.
- `MICROTASK_SELECTED`: dispatched when a microtask is selected in `MicroTaskList`.
- `TASK_CREATED`: dispatched when a task is created in `CreateForm`.
- `MICROTASK_CREATED`: dispatched when a microtask is created in `CreateForm`. 

## Data Schemas

Refer to the `Task` and `MicroTask` models described in the user's prompt.