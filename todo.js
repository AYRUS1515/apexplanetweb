// ===== Load Tasks from LocalStorage =====
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===== Display Tasks =====
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("glass");

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})" class="btn">❌</button>
        `;

        taskList.appendChild(li);
    });
}

// ===== Add Task =====
function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") return;

    tasks.push(input.value.trim());

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

// ===== Delete Task =====
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// ===== Load Tasks on Page Load =====
displayTasks();