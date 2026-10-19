1 Что такое DOM?

Язык программирования, похожий на JavaScript

+Представление HTML-документа в виде структуры объектов

Файл, который хранит CSS-стили



2 Что вернёт querySelector(), если подходящий элемент не найден?

undefined

Пустой массив

+null



3 Чем отличаются querySelector() и querySelectorAll()?

+Первый находит один элемент, второй — все совпадения

Первый меняет HTML, второй читает HTML

Они работают совершенно одинаково



4 Чем отличаются textContent и innerHTML?

Ничем

+textContent работает с текстом, innerHTML — с HTML-разметкой

innerHTML безопаснее для любых пользовательских данных



5 Что делает classList.toggle('active')?

Всегда удаляет класс

Всегда добавляет класс

+Переключает наличие класса



6 Что произойдёт после createElement('p')?

Новый абзац сразу появится на странице

+Будет создан элемент, который ещё нужно вставить в DOM

Изменится исходный HTML-файл



7 Для чего используется append()?

+Добавляет содержимое в конец элемента

Удаляет элемент

Ищет элемент по классу



8 Что выведет код: const el = document.querySelector('#missing'); console.log(el.textContent); если элемента нет?

+null

undefined

Возникнет ошибка при обращении к textContent у null

//Задание 1 — найти элементы
//const title = document.querySelector("#title");
//console.log(title.textContent);
//const description = document.querySelector(".description");
//console.log(description.textContent);
//const descriptions = document.querySelectorAll(".description");
//for (let desc of descriptions) {
//     console.log(desc.textContent);
//};

//Задание 2 — изменить текст
//const title = document.querySelector("#title");
//title.textContent = "DOM изучен!";
//const paragraphs = document.querySelectorAll(".description");
//for (let paragraph of paragraphs) {
//    if(paragraph.textContent == "Первый абзац") {
//        paragraph.textContent = "Я изучаю JavaScript";
//    } else if (paragraph.textContent == "Второй абзац") {
//        paragraph.textContent = "Я умею работать с DOM";
//    };
//};

//Задание 3 — HTML-разметка
//1 способ
//const title = document.querySelector("#title");
//title.innerHTML = "Привет <strong>JavaScript</strong>!";
//2 способ
//const title = document.querySelector("#title");
//const newTitle = document.createElement("h1");
//newTitle.textContent = "Привет JavaScript!";
//title.append(newTitle);

//Задание 4 — атрибуты
//const link = document.querySelector("#link");
//console.log(link.getAttribute("href"));
//link.setAttribute("href", "https://openai.com");
//console.log(link.getAttribute("href"));
//ink.setAttribute("target", "_blank");
//console.log(link.hasAttribute("target"));

//Задание 5 — классы и стили
//const title = document.querySelector("#title");
//title.classList.add("active");
//console.log(title.classList.contains("active"));
//title.classList.remove("active");
//title.classList.toggle("active");
//title.style.color = "blue";

//Задание 6 — создать элемент
//const container = document.querySelector("#container");
//const newEl = document.createElement("p");
//newEl.textContent = "Я был создан при помощи JS!";
//container.append(newEl);

//Задание 7 — удалить элемент
//const old = document.querySelector("#oldParagraph");
//old.remove();
//const check = document.querySelector("#oldParagraph");
//console.log(check);

//Задание 8 — обработка массива и создание элементов
//const products = [
//    "Ноутбук",
//    "Мышь",
//    "Клавиатура",
//    "Монитор"
//];

//const tasks = document.querySelector("#tasks");
//const newEl1 = document.createElement("li");
//const newEl2 = document.createElement("li");
//const newEl3 = document.createElement("li");
//const newEl4 = document.createElement("li");

//for(let prod of products) {
//    if (prod == "Ноутбук") {
//        newEl1.textContent = prod;
//    } else if (prod == "Мышь") {
//        newEl2.textContent = prod;
//    } else if (prod == "Клавиатура") {
//        newEl3.textContent = prod;
//   } else {
//        newEl4.textContent = prod;
//    };
//};

//tasks.append(newEl1, newEl2, newEl3, newEl4);

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
const newEl = document.createElement("li");

for(let task of tasks) {
    newEl.textContent = task.title;
    if (task.completed === true) {
        newEl.classList.add("completed");
    };
    list.append(newEl);
};//Здесь, я не понимаю как сделать так чтобы он добавлял элементы, без создания нескольких newEl для каждого лемента списка

counter.textContent = `Всего задач: ${tasks.length}`;