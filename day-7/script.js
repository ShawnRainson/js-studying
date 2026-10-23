//Задание 1 — обработчик click
//const helloButton = document.querySelector("#helloButton");
//const message = document.querySelector("#message");

//helloButton.addEventListener("click", () => {
//    message.textContent = "Hello! You clicked this button!";
//});

//Задание 2 — счётчик
//const incrBtt = document.querySelector("#increase");
//const counter = document.querySelector("#counter");

//let count = 0;

//incrBtt.addEventListener("click", () => {
//    count++;
//    counter.textContent = count;
//});

//Задание 3 — реакция на ввод
//const inputName = document.querySelector("#nameInput");
//const greeting = document.querySelector("#greeting");

//inputName.addEventListener("input", () => {
//    if (inputName.value == "") {
//        greeting.textContent = "Hello, stranger!";
//    } else {
//        greeting.textContent = `Hello, ${inputName.value}!`;
//    };
//});

//Задание 4 — объект события
//const inspBtt = document.querySelector("#inspectButton");

//inspBtt.addEventListener("click", (event) => {
//    console.log(event.type);
//    console.log(event.target);
//    console.log(event.currentTarget);
//});

//Задание 5 — отправка формы
//const userForm = document.querySelector("#userForm");
//const userName = document.querySelector("#userName");
//const result = document.querySelector("#formResult");

//userForm.addEventListener("submit", (event) => {
//    event.preventDefault();
//
//    result.textContent = `Hello, ${userName.value}`;
//});

//Задание 6 — переключатель текста
const toggleButton = document.querySelector("#toggleButton");
const toggleText = document.querySelector("#toggleText");

toggleButton.addEventListener("click", () => {
    if (toggleText.style.display == "text" ) {
        toggleText.style.display = "none"
    } else {
        toggleText.style.display = "text";
    };
});//Тут не знаю как реализовать

//Задание 7 — изменение класса по клику
//const highlightText = document.querySelector("#highlightText");
//const highlisghtButton = document.querySelector("#highlightButton");

//highlightText.classList.add("highlight");

//highlisghtButton.addEventListener("click", () => {
//    highlightText.classList.toggle("highlight");
//});

//Задание 8 — добавление задачи через форму
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (taskInput.value != "") {
        const newEl = document.createElement("li");
        newEl.textContent = taskInput.value;
        taskList.append(newEl);
        taskInput.textContent = "";        
    };
});//Вроде логика правильная, но почему-то в списке не появляются элементы