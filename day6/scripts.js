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

