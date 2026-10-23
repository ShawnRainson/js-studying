
const tasks = [
    { title: "Изучить DOM", completed: true },
    { title: "Изучить события", completed: false }
];

function renderTasks(tasks) {
    const taskList = document.querySelector("#taskList");
    const counter = document.querySelector("#counter");

    taskList.textContent = "";

    for (let task of tasks) {
        const newEl = document.createElement("li");
        newEl.textContent = task.title;

        if (task.completed === true) {
            newEl.classList.add("completed");
        }

        newEl.addEventListener("click", () => {
            task.completed = !task.completed;
            renderTasks(tasks);
        });

        taskList.append(newEl);
    }

    counter.textContent = `Всего задач: ${tasks.length}`;
}

renderTasks(tasks);

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (taskInput.value !== "") {
        tasks.push({
            title: taskInput.value,
            completed: false
        });

        taskInput.value = "";
        renderTasks(tasks);
    }
});
