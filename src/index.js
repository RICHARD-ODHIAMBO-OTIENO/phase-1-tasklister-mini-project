document.addEventListener("DOMContentLoaded", () => {
  // create-task-form
  const taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', taskSubmit);
});

// Function to handle the form submission
function taskSubmit(event) {
  event.preventDefault();
  
  
  const newTask = document.getElementById('new-task-description').value;
  
  // Add the task to the DOM
  appendNewTask(newTask); 
  
  // Clear the input after submission
  event.target.reset();
}

// Function to add the Task to DOM
function appendNewTask(task) { 
  const taskNew = document.createElement("li");
  taskNew.textContent = task;
  
  // We need to append the list item to the tasks list
  const taskList = document.getElementById('tasks');
  taskList.appendChild(taskNew);
}