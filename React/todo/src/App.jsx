import React, { useState } from 'react';
import './App.css';

// Create a functional component called ToDoApp
function ToDoApp() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value state
  };

  // Function to add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      // Add a new task to the tasks list
      setTasks([...tasks, inputValue]);
      setInputValue(''); // Clear the input field
    }
  };

  // Function to remove a task by its index
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filter out the task at the given index
    setTasks(updatedTasks); // Update the tasks list
  };

  // Render the ToDoApp component
  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field to add new tasks */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Call handleInputChange when input changes
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button> {/* Button to add a task */}
      </div>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button> {/* Button to remove a task */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp; // Export the ToDoApp component
