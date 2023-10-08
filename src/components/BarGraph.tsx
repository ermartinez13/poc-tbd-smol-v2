import React from "react";
import { Bar } from "react-chartjs-2";
import { Task } from "../models";

// This is a functional component that receives an array of tasks as props.
// It generates a bar graph using the Chart.js library.
// Each task's time spent and time budget are used to create the bars.
// The bar graph is assigned the id 'bar-graph' as per the project specification.
const BarGraph: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const data = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        label: "Time Budget",
        data: tasks.map((task) => task.timeBudget),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Time Spent",
        data: tasks.map((task) => task.timeSpent),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div id="bar-graph">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
