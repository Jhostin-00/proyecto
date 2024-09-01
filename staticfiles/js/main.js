// main.js

// Placeholder for tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks on the home page
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.name}</span>
            <button onclick="viewTask(${index})">Ver</button>
            <button style="background-color:red" onclick="deleteTask(${index})">Borrar</button>
        `;
        taskList.appendChild(taskItem);
    });
}


document.getElementById('create_task').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const data = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,   
  
      dueDate: document.getElementById('dueDate').value,
    };
  
    fetch('api/create_task/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Tarea creada:', data);
    })
    .catch(error => {
      console.error('Error creando tarea:', error);
    });
  });


// Function to create a new task
function createTask() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const newTask = { name, description, dueDateate };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    window.location.href = '../html/index.html';
}

// Function to view and edit a task's details
function viewTask(index) {
    const task = tasks[index];
    localStorage.setItem('currentTaskIndex', index);
    window.location.href = 'task-detail.html';
}

function loadTaskDetails() {
    const index = localStorage.getItem('currentTaskIndex');
    const task = tasks[index];

    document.getElementById('name').value = task.name;
    document.getElementById('description').value = task.description;
    document.getElementById('dueDate').value = task.dueDate;
}

function saveTaskDetails() {
    const index = localStorage.getItem('currentTaskIndex');

    tasks[index].name = document.getElementById('name').value;
    tasks[index].description = document.getElementById('description').value;
    tasks[index].dueDatedate = document.getElementById('dueDate').value;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = '../html/index.html';
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('task-list')) {
        displayTasks();
    } else if (document.getElementById('task-detail-form')) {
        loadTaskDetails();
    }
});

function goBack() {
    window.history.back();
}



