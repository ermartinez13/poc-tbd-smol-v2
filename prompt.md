a react single page web application that consolidates aspects of a pomodoro timer, a to-do list, and a time tracker. The expected user flow is as follows: user starts by creating a task; user can then add microtasks to the parent task; when microtasks exist within a parent task, the user can interact with a timer to track time spent completing microtask; the total time expected and the total actual time spent on microtasks is aggregated and stored within the parent task; a bar graph is generated that shows the expected vs actual time spent per task.

- the relevant data models and types are as follows:

  ```
  enum Status {
  	Done: 'done'
  	Active: 'active'
  }

  model Task {
  	id String // auto-generated uuid
  	name String
  	status Status // default value of Status.Active
  	defaultMicroBudget Int
  	timeSpent Int // default value of 0, value is the sum of all its child microtasks’ time spent properties
  	timeBudget Int // default value of 0
  }

  model microTask {
  	id String // auto-generated uuid
  	name String
  	taskId String
  	status Status // default value of Status.Active
  	timeBudget Int // default value is parent task's default micro budget value
  	timeSpent Int  // default value of 0, value is the sum of all its child microtasks’ time budget properties
  }
  ```

- the default view is divided into three sections:
  - section one is divided into two subsections
    - subsection one contains a list component that renders all tasks as a single-line visual row
      - each task item row displays all the task's properties
      - clicking on a task item row will set the task's id as the value for the application's state: `selectedTaskId`
        - additionally, selecting a new task item will reset the application state for `selectedMicroTaskId` to `null`
    - subsection two contains a list component that renders all microtasks for the active parent task as a single-line visual row
      - note, this subsection’s content is only rendered when a task has been selected
      - each microtask item row displays all the microtask's properties
      - clicking on a microtask item will set the microtask's id as the value for the application's state: `selectedMicroTaskId`
  - section two contains the timer component
    - the timer component receives both the selected task and microtask as props
    - note, this section’s content is only rendered when both a task and microtask have been selected
    - relevant internal state values are:
    ```
    timeElapsed Int // initial state value is derived from microtask's timeSpent value
    timeBudget Int // initial state value is derived from microtask's timeBudget value
    isActive Boolean // default value of false
    ```
    - the timer component renders the selected microtask’s name and the time elapsed working on the microtask in the format MM:SS
    - there are five buttons within the component
      - note: wrap all the buttons in a fieldset that is disabled when the microtask's status is Status.Done
      - a stop button to stop the timer
        - on click, update the microtask’s timeSpent property
      - a start button to start the timer
      - an extend button to update the microtask’s time budget value
        - on click, update the microtask's timeBudget value by taking its current value and adding to it the parent task's defaultMicroBudget value
      - a reset button
        - on click, set the timer isActive value to `false`, and update both the timer's timeElapsed and the microtasks' timeSpent value to 0
      - a complete button to change the microtask status to ‘done’ and stop the timer
    - when timer is active, its time elapsed state value is incremented by 1 every second
      - when the timer is not active, stop incrementing the time elapsed value
  - section three contains the bar graph component
    - the bar graph component displays the time budget vs time spent per task

Important details:

- the application must be written in typescript and use .tsx as the extension for React files
- task and microtask data must be persisted to local storage
- update the parent task's timeSpent and timeBudget properties when any of its child microtask's timeSpent and timeBudget values are updated
- the forms for creating both a task and a microtask are keyboard-triggered
  - while no input is active and the user presses the letter t, the popup for the task create form is rendered
  - while no input is active and the user presses the letter m, the popup for the microtask create form is rendered
  - on form submit, the forms are reset and the popups are dismissed
