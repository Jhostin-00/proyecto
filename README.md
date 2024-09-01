To-Do List Aplication
Descripción
Esta es una aplicación web simple de lista de tareas (To-Do List) que permite a los usuarios crear, ver, editar y eliminar sus tareas diarias. La aplicación es totalmente funcional y responsive, lo que garantiza que se vea bien en dispositivos de cualquier tamaño.

Tecnologías Utilizadas
HTML: Estructura de las páginas.
CSS: Estilización de la aplicación, incluyendo diseño responsive.
JavaScript: Lógica de la aplicación para manejar las tareas y la interacción con el DOM.
LocalStorage: Almacenamiento local para guardar las tareas en el navegador del usuario.

Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
to-do-list/
│
├── css/
│   └── style.css          # Archivo principal de estilos
│
├── js/
│   └── main.js            # Archivo principal de JavaScript
│
├── pages/
│   ├── create-task.html   # Página para crear una nueva tarea
│   └── task-detail.html   # Página para ver y editar una tarea específica
│
├── index.html             # Página de inicio donde se muestran las tareas
└── README.md              # Archivo con la documentación del proyecto

Organización del Código
HTML: Cada página HTML (index.html, task-detail.html, create-task.html) contiene la estructura básica de la interfaz de usuario. Estas páginas están interconectadas para facilitar la navegación entre crear, visualizar y editar tareas.
CSS: El archivo style.css contiene estilos básicos para toda la aplicación, con un enfoque en la simplicidad y la usabilidad en dispositivos móviles. Se utilizan flexbox y media queries para lograr un diseño responsive.
JavaScript: El archivo main.js contiene la lógica para gestionar las tareas. Las funciones están diseñadas para ser reutilizables y mantener la aplicación modular y fácil de mantener.

Desafíos y Soluciones
1. Persistencia de Datos en el Navegador
Desafío: Asegurar que las tareas del usuario se mantengan incluso después de cerrar o recargar la página.
Solución: Utilicé LocalStorage para almacenar las tareas en el navegador. Esto permite que los datos persistan entre sesiones del navegador sin la necesidad de un backend.
2. Navegación entre Páginas
Desafío: Manejar la navegación entre diferentes páginas (Inicio, Detalle de Tarea, Creación de Tarea) de manera efectiva.
Solución: Utilicé enlaces y redirecciones en JavaScript para asegurar una transición fluida entre páginas, manteniendo la simplicidad en la estructura del proyecto.
3. Edición de Tareas
Desafío: Permitir la edición de los detalles de una tarea y garantizar que los cambios se reflejen correctamente en la lista principal de tareas.
Solución: Implementé una función que carga los detalles de la tarea seleccionada en un formulario editable y guarda los cambios en el LocalStorage al confirmar la edición.
