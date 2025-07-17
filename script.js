
function newTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function(e) {
        e.stopPropagation();
        li.remove();
    };

    taskText.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

// Allow adding tasks by pressing Enter
document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById("taskInput");
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            newTask();
        }
    });
});
