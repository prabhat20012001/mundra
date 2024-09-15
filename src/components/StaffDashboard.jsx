import React, { useState, useEffect } from 'react';

const StaffDashboard = () => {
  const [tasks, setTasks] = useState([
    { task: 'Complete the design layout', staff: ['John', 'Emily'], progress: 50, feedback: '', completed: false },
    { task: 'Update the report', staff: ['Michael'], progress: 30, feedback: '', completed: false },
  ]);

  const loggedInStaff = 'John'; // Simulate logged-in staff member

  const filteredTasks = tasks.filter((task) => task.staff.includes(loggedInStaff));

  const handleProgressUpdate = (index, progress) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].progress = progress;
    setTasks(updatedTasks);
  };

  const handleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Staff Dashboard</h2>

      <h3 className="text-lg font-semibold mb-2">Assigned Tasks</h3>
      <div className="space-y-4">
        {filteredTasks.map((task, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p>{task.task}</p>
            <div className="mt-2">
              <label className="block mb-1">Progress (%):</label>
              <input
                type="number"
                value={task.progress}
                onChange={(e) => handleProgressUpdate(index, e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              onClick={() => handleCompletion(index)}
              className={`mt-2 px-4 py-2 rounded ${
                task.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
            >
              {task.completed ? 'Completed' : 'Mark as Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDashboard;
