const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
});