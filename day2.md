Вопрос 1

Что выведет код?

let numbers = [10, 20, 30];

let removed = numbers.pop();

console.log(removed); //30
console.log(numbers); //[10, 20]

Вопрос 2

Что выведет код?

let fruits = ["apple", "banana", "orange"];

fruits.unshift("kiwi"); // Добавление "kiwi" в начало
fruits.push("mango"); // Добавление "mango" в конец
fruits.shift(); // Удаление первого элемента

console.log(fruits); //["apple", "banana", "orange", "mango"]

Распиши изменения по шагам.

Вопрос 3

В чём разница между:

slice() - Создаёт новый массив, копирует массив
splice() - Изменяет исходный массив, добавляет, удаляет и заменяет элементы

Объясни своими словами и приведи короткий пример каждого.

Примеры:
let numbers = [1, 2, 3, 4];
let copy = numbers.slice(1);

console.log(numbers); // [1, 2, 3, 4]
console.log(copy); // [1, 3, 4]

let numbers = [1, 2, 3, 4];
numbers.splice(1, 2)

console.log(numbers); // [1, 4]


Вопрос 4

Что выведет:

let numbers = [1, 2, 3, 4, 5];

let result = numbers.slice(1, 4);

console.log(result); //[2, 3, 4]
console.log(numbers); //[1, 2, 3, 4, 5]

Почему в result не попадёт элемент с индексом 4? - Потому-что slice не включает его

Вопрос 5

Что выведет:

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}// 10, 20, 30

Что содержит переменная number: индекс или значение элемента? - значение

Вопрос 6 — небольшая ловушка

Что выведет код?

let numbers = [1, 2, 3];

let copy = numbers;

copy.push(4);

console.log(numbers); //[1, 2, 3]
console.log(copy); //[1, 2, 3, 4]

Подумай внимательно: это копия массива или две переменные, указывающие на один и тот же массив?
