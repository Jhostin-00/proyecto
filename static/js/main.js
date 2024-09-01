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
    event.preventDefault(); // Previene el envío tradicional del formulario

    const formData = new FormData(this);
    const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

    fetch("", {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': csrfToken
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirigir o mostrar un mensaje de éxito
            window.location.href = "/api/index"; // Redirigir a la lista de tareas, por ejemplo
        } else {
            return response.json().then(errors => {
                // Manejo de errores
                alert('Error al crear la tarea. Por favor, revisa los campos.');
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


  // Función para obtener el valor del cookie csrftoken
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();   
  
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;   
  
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



