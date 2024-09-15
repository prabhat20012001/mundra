import React, { useState } from 'react';

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [assignedStaffList, setAssignedStaffList] = useState([]);
  const availableStaff = ['John', 'Emily', 'Michael', 'Sarah']; // Example staff list

  // Function to add a task
  const handleAddTask = () => {
    if (newTask && assignedStaffList.length > 0) {
      const newTasks = [
        ...tasks,
        {
          task: newTask,
          staff: [...assignedStaffList], // Assign all selected staff
          feedback: '',
          progress: 0,
          completed: false,
        },
      ];
      setTasks(newTasks);
      setNewTask('');
      setAssignedStaffList([]); // Reset staff list after adding the task
    } else {
      alert('Please add a task and assign at least one staff member.');
    }
  };

  // Function to add a selected staff member to the list
  const handleAddStaff = () => {
    if (selectedStaff && !assignedStaffList.includes(selectedStaff)) {
      setAssignedStaffList([...assignedStaffList, selectedStaff]);
      setSelectedStaff(''); // Clear selection after adding
    } else if (assignedStaffList.includes(selectedStaff)) {
      alert('Staff member already added.');
    }
  };

  // Function to remove a staff member from the list
  const handleRemoveStaff = (staffToRemove) => {
    setAssignedStaffList(assignedStaffList.filter((staff) => staff !== staffToRemove));
  };

  const handleFeedback = (index, feedback) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].feedback = feedback;
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Admin Dashboard</h2>

      {/* Input for adding a new task */}
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Assign new task..."
        />
      </div>

      {/* Dropdown to select staff and add them */}
      <div className="mb-4">
        <label className="block mb-1">Assign to Staff:</label>
        <div className="flex items-center space-x-2">
          <select
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              Select staff...
            </option>
            {availableStaff.map((staff, index) => (
              <option key={index} value={staff}>
                {staff}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddStaff}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            +
          </button>
        </div>

        {/* Display the selected staff members */}
        <div className="mt-4">
          <h4 className="font-semibold">Assigned Staff:</h4>
          <div className="flex flex-wrap gap-2">
            {assignedStaffList.map((staff, index) => (
              <div key={index} className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
                {staff}
                <button
                  onClick={() => handleRemoveStaff(staff)}
                  className="ml-2 text-red-500 font-bold"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button to add the task */}
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-600 text-white rounded w-full md:w-auto"
      >
        Add Task
      </button>

      {/* List of assigned tasks */}
      <h3 className="text-lg font-semibold mt-6">Assigned Tasks</h3>
      <div className="space-y-4">
  {tasks.map((task, index) => (
    <div key={index} className="bg-white p-4 rounded shadow">
      {/* Task Name as Heading */}
      <h4 className="text-lg font-semibold mb-2">Task Name: {task.task}</h4>

      <p className="mt-2">
        <strong>Assigned to:</strong> {task.staff.join(', ')}
      </p>

      <div className="mt-2">
        <label className="block mb-1">Admin Feedback:</label>
        <input
          type="text"
          value={task.feedback}
          onChange={(e) => handleFeedback(index, e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Provide feedback after task completion..."
        />
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default AdminDashboard;
