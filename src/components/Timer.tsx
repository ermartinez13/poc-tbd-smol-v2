import React, { useState, useEffect } from 'react';
import { MicroTask, Status } from '../models/MicroTask';

interface TimerProps {
  selectedMicroTask: MicroTask;
  onUpdateMicroTask: (microTask: MicroTask) => void;
}

const Timer: React.FC<TimerProps> = ({ selectedMicroTask, onUpdateMicroTask }) => {
  const [timeElapsed, setTimeElapsed] = useState(selectedMicroTask.timeSpent);
  const [timeBudget, setTimeBudget] = useState(selectedMicroTask.timeBudget);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed(timeElapsed + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, timeElapsed]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    selectedMicroTask.timeSpent = timeElapsed;
    onUpdateMicroTask(selectedMicroTask);
  };

  const handleExtend = () => {
    selectedMicroTask.timeBudget += selectedMicroTask.timeBudget;
    setTimeBudget(timeBudget + selectedMicroTask.timeBudget);
    onUpdateMicroTask(selectedMicroTask);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeElapsed(0);
    selectedMicroTask.timeSpent = 0;
    onUpdateMicroTask(selectedMicroTask);
  };

  const handleComplete = () => {
    setIsActive(false);
    selectedMicroTask.status = Status.Done;
    onUpdateMicroTask(selectedMicroTask);
  };

  return (
    <div id="timer">
      <h2>{selectedMicroTask.name}</h2>
      <p>{timeElapsed} / {timeBudget}</p>
      <fieldset disabled={selectedMicroTask.status === Status.Done}>
        <button id="start-button" onClick={handleStart}>Start</button>
        <button id="stop-button" onClick={handleStop}>Stop</button>
        <button id="extend-button" onClick={handleExtend}>Extend</button>
        <button id="reset-button" onClick={handleReset}>Reset</button>
        <button id="complete-button" onClick={handleComplete}>Complete</button>
      </fieldset>
    </div>
  );
};

export default Timer;