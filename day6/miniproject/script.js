//Часть 9. 🏆 Финальный мини-проект — менеджер задач
//Сразу скажу что доп. задание делать не буду, так как filter и иные подобные функции по плану были, но почему-то в предыдущих уроках ты мне их не давал на изучение
const tasks = [
    { title: "Изучить переменные", completed: true },
    { title: "Повторить массивы", completed: false },
    { title: "Изучить DOM", completed: false },
    { title: "Создать первый проект", completed: false }
];

const title = document.querySelector("#title");
const list = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

for(let task of tasks) {
    const newEl = document.createElement("li");
    newEl.textContent = task.title;
    if (task.completed === true) {
        newEl.classList.add("completed");
    };
    list.append(newEl);
};//Здесь, я не понимаю как сделать так чтобы он добавлял элементы, без создания нескольких newEl для каждого лемента списка

counter.textContent = `Всего задач: ${tasks.length}`;