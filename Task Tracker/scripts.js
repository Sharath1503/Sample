document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');
    const categoryFilter = document.getElementById('category-filter');

    taskForm.addEventListener('submit', addTask);
    categoryFilter.addEventListener('change', filterTasks);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const category = taskCategory.value;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.setAttribute('data-category', category);
        taskItem.innerHTML = `
            ${taskText} <span class="category">(${category})</span>
            <button class="complete-btn">Complete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskItem.classList.toggle('complete');
        });

        filterTasks();
    }

    function filterTasks() {
        const category = categoryFilter.value;
        const tasks = taskList.querySelectorAll('.task-item');

        tasks.forEach(task => {
            if (category === 'all' || task.getAttribute('data-category') === category) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    }
});
