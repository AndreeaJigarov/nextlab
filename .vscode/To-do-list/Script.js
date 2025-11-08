// Selects necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Initialize tasks array from localStorage or empty array if none exists
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to create a new task element
const createTaskElement = (task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="${task.done ? 'done' : ''}">${task.text}</span>
        <div class="buttons">
            <button class="check-btn">✔️</button>
            <button class="delete-btn">✖️</button>
        </div>
    `;
    
    // Add fade-in animation class
    li.classList.add('fade-in');
    
    // Toggle task completion
    li.querySelector('.check-btn').addEventListener('click', () => {
        tasks[index].done = !tasks[index].done;
        li.querySelector('span').classList.toggle('done');
        saveTasks();
    });
    
    // Delete task
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.classList.add('fade-out');
        li.addEventListener('animationend', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
    });
    
    return li;
};

// Function to render all tasks
const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        taskList.appendChild(createTaskElement(task, index));
    });
};

// Add new task function
const addTask = () => {
    const text = taskInput.value.trim();
    
    // Validate input
    if (!text) return;
    
    // Add new task to array
    tasks.push({
        text: text,
        done: false
    });
    
    // Clear input
    taskInput.value = '';
    
    // Save and render
    saveTasks();
    renderTasks();
};

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.3s ease-in;
    }
    
    .fade-out {
        animation: fadeOut 0.3s ease-out;
    }
    
    .done {
        text-decoration: line-through;
        color: #888;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initial render
renderTasks();