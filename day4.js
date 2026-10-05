//Задание 1 — параметры
function greet(name, age) {
    console.log(`Hello ${name}! You are ${age} years old.`);
};

greet("Alex", 25);

//Задание 2 — default parameter
function newGreet(name = "Guest") {
    console.log(`Hello, ${name}`);
};

newGreet("Alex");
newGreet();

//Задание 3 — Function Expression
const square = function(x) {
    return x * x;
};

console.log(square(5));

//Задание 4 — Arrow Function

const isAdult = age => age >= 18;

console.log(isAdult(20));
console.log(isAdult(16));

//Задание 5 — Arrow Function + массив
const getFirst = numbers => {
    return numbers[0];
};

console.log(getFirst([10, 20, 30]));

//🔥 Задание 6 — callback
function processNumber(number, callback) {
    return callback(number);
};

const doubleFunc = x => x * 2;

console.log(processNumber(10, doubleFunc));

//🔥 Задание 7 — callback + массив

function processNumbers(numbers, callback) {
    return callback(numbers);
};

const doubleArr = arr => {
    let result = [];
    for(let number of arr) {
        number *= 2;
        result.push(number);
    };
    return result;
};

console.log(processNumbers([1, 2, 3, 4], doubleArr));

//🥋 Задание 8 — rest parameter

function sumAll(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    };

    return result;
};

console.log(sumAll(1, 2, 3, 4, 5));

//🏆 Финальный мини-проект — «Обработчик пользователей»
let users = [
    { name: "Alex", age: 25 },
    { name: "John", age: 17 },
    { name: "Anna", age: 30 },
    { name: "Mike", age: 15 }
];

function processUsers(user, callback) {
    return callback(user);
};

const showNames = function(arr) {
    let result = [];
    for(let user of arr) {
        result.push(user.name);
    };
    return result;
};

const adultUsers = function(arr) {
    let result = [];
    for(let user of arr) {
        if (user.age >= 18) {
            result.push(true);
        } else {
            result.push(false);
        };
    };
    return result;
};

console.log(processUsers(users, showNames));
console.log(processUsers(users, adultUsers));