Вопрос 1

Что выведет каждый console.log?

let a = 10;
let b = "5";

console.log(a + b); - "105" //Соединение строк
console.log(a - b); - 5 //Преобразует b в number
console.log(a * b); - 50 //Преобразует b в number
console.log(a === b); - false //Разные типы
console.log(a == b); - false //Неравные значения

Напиши пять результатов по порядку и почему, а не просто ответы.

Вопрос 2

Что произойдёт здесь?

let value = "123";

console.log(typeof value); - String

value = Number(value);

console.log(typeof value); - Number

Что выведется в двух console.log?

Вопрос 3

Объясни своими словами разницу между:

undefined
null

Можно привести по одному примеру.

Ответ: undefined - переменная задана, но в ней нет значения, null - переменная задана и ей специально присвоено ничего

Вопрос 4

Что произойдёт здесь?

let result = Number("hello");

console.log(result); - NaN
console.log(typeof result); - number

И почему typeof result будет именно таким?

Ответ: Это старая особенность JS

Вопрос 5 — небольшой подвох 😈

Что выведет:

console.log(10 + 20 + "30"); - "3030"
console.log("10" + 20 + 30); - 102030

Здесь особенно интересно в какой момент JavaScript начинает работать со строкой.