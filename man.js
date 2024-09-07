let taskList = [];

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('removeTaskBtn').addEventListener('click', removeTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    if (task !== '') {
        taskList.push(task);
        taskInput.value = '';
        updateTaskList();
    }
}

function updateTaskList() {
    const taskListUI = document.getElementById("taskList");
    taskListUI.innerHTML = '';
    taskList.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${task}`;
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        taskListUI.appendChild(listItem);
    });
}


function removeTask() {
    taskList.pop();
    updateTaskList();
}
