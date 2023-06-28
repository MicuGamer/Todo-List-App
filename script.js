const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

addBtn.addEventListener('click', function () {
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);
    li.innerHTML += '<button class="delete-btn">Delete</button>';
    todoList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        li.classList.add('fade');
        setTimeout(() => {
            li.remove();
            updateTaskCount();
        }, 500);
    });

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
        updateTaskCount();
    });

    updateTaskCount();
}

function updateTaskCount() {
    const tasks = todoList.querySelectorAll('li');
    const completedTasksCount = todoList.querySelectorAll('li.completed').length;

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completedTasksCount;
}