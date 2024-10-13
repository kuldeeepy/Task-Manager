const titleInput = document.getElementById("task1");
const descInput = document.getElementById("task2");
const button = document.getElementById("btn");

button.addEventListener("click", addTask);

function addTask() {
    let newTask = document.createElement('div');
    newTask.classList.add("task");
    newTask.draggable = true;

    let title = document.createElement('h2');
    title.textContent = titleInput.value;

    let desc = document.createElement('p');
    desc.textContent = descInput.value;

    newTask.append(title, desc);
    document.querySelector(".pending").appendChild(newTask); // Add new task to pending

    titleInput.value = "";
    descInput.value = "";

    // Add dragstart event to the new task
    newTask.addEventListener("dragstart", dragStart);
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", event.target.outerHTML); 
    event.target.classList.add('dragging'); 
}

const droppableAreas = {
    pending: document.querySelector(".pending"),
    progress: document.querySelector(".progress"),
    done: document.querySelector(".done")
};

Object.values(droppableAreas).forEach(area => {
    area.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    area.addEventListener("drop", (event) => {
        event.preventDefault();
        
        const draggedData = event.dataTransfer.getData("text/plain");
        const draggedTask = document.querySelector('.dragging'); 

        if (draggedTask) {
            area.appendChild(draggedTask);
            draggedTask.classList.remove('dragging'); 
        }
    });
});

// Attach dragstart event to existing tasks
const tasks = document.querySelectorAll(".task");
tasks.forEach(task => {
    task.addEventListener("dragstart", dragStart);
});
