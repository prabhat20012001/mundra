import React, { useState } from 'react';

const ProjectPlanning = () => {
  const [plannedTasks, setPlannedTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
  const [completionPercent, setCompletionPercent] = useState({}); // Track percentage completion

  const handleAddPlannedTask = () => {
    if (taskName && taskDate) {
      const newPlannedTasks = [
        ...plannedTasks,
        {
          name: taskName,
          date: taskDate,
          id: Date.now() // Add a unique ID for each task
        },
      ];
      setPlannedTasks(newPlannedTasks);
      setTaskName('');
      setTaskDate(new Date().toISOString().split('T')[0]); // Reset to today's date after task is added
    } else {
      alert('Please fill in both task name and date.');
    }
  };

  const handleCompletionChange = (taskId, percent) => {
    setCompletionPercent((prev) => ({
      ...prev,
      [taskId]: percent,
    }));
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Project Planning</h2>

      {/* Input for adding a new task */}
      <div className="mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter task name..."
        />
      </div>

      {/* Date picker for task date */}
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Button to add the task */}
      <button
        onClick={handleAddPlannedTask}
        className="px-4 py-2 bg-blue-600 text-white rounded w-full md:w-auto"
      >
        Add Planned Task
      </button>

      {/* List of planned tasks */}
      <h3 className="text-lg font-semibold mt-6">Planned Tasks</h3>
      <div className="space-y-4">
        {plannedTasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Task: {task.name}</h4>
            <p className="text-gray-600">Planned Date: {task.date}</p>

            {/* Input for percentage completion */}
            <div className="mt-4">
              <label className="block mb-2">Completion Percentage:</label>
              <input
                type="number"
                min="0"
                max="100"
                value={completionPercent[task.id] || ''}
                onChange={(e) => handleCompletionChange(task.id, e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Enter percentage..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPlanning;
