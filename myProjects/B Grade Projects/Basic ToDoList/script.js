const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim(); // To declare String with No Gap

  // It looks difficult but actually it is very simple !== -> Not equal to
  if (taskText !== '') {
    
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    

    newTask.appendChild(checkbox);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Add an event listener to the input field to handle "Enter" keypress
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
