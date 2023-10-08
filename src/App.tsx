import React, { useState, useEffect, useCallback } from "react";
import { Status, Task, MicroTask } from "./models";
import TaskList from "./components/TaskList";
import { MicroTaskList } from "./components/MicroTaskList";
import Timer from "./components/Timer";
// import BarGraph from "./components/BarGraph";
import { TaskCreateForm, MicroTaskCreateForm } from "./components/CreateForm";

export const AppContext = React.createContext({});

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [microTasks, setMicroTasks] = useState<MicroTask[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedMicroTaskId, setSelectedMicroTaskId] = useState<string | null>(
    null
  );

  const handleTaskClick = useCallback((taskId: string) => {
    setSelectedTaskId(taskId);
    setSelectedMicroTaskId(null);
  }, []);

  const handleMicroTaskClick = useCallback((microTaskId: string) => {
    setSelectedMicroTaskId(microTaskId);
  }, []);

  const handleSubmitTaskForm = useCallback((task: Task) => {
    setTasks((prev) => [...prev, task]);
  }, []);

  const handleSubmitMicroTaskForm = useCallback((microTask: MicroTask) => {
    setMicroTasks((prev) => [...prev, microTask]);
  }, []);

  const saveData = useCallback(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("microTasks", JSON.stringify(microTasks));
  }, [tasks, microTasks]);

  const loadData = useCallback(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedMicroTasks = localStorage.getItem("microTasks");
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedMicroTasks) setMicroTasks(JSON.parse(storedMicroTasks));
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  return (
    <div>
      <AppContext.Provider
        value={{ microTasks, selectedTaskId, handleMicroTaskClick }}
      >
        <div>
          <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
          {selectedTaskId && (
            <MicroTaskList
              taskId={selectedTaskId}
              microTasks={microTasks}
              onMicroTaskClick={handleMicroTaskClick}
            />
          )}
        </div>
        {selectedTaskId && selectedMicroTaskId && (
          <Timer
            selectedTaskId={selectedTaskId}
            selectedMicroTaskId={selectedMicroTaskId}
          />
        )}
        {/* <BarGraph tasks={tasks} /> */}
        <TaskCreateForm onSubmit={handleSubmitTaskForm} />
        {selectedTaskId && (
          <MicroTaskCreateForm
            taskId={selectedTaskId}
            onSubmit={handleSubmitMicroTaskForm}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
