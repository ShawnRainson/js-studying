Часть 1. Контрольные вопросы
Ответь своими словами, не обязательно дословно повторять теорию.
1 Для чего нужны JavaScript-модули? - для удобства работы над большими проектами путём разделения кода на отдельные файлы
2 Чем export отличается от import? - первый нужен для обозначения функций или переменных которые можно использовать в другом файле, а второй нужен для получения этих переменных или функций
3 В чём разница между именованным экспортом и default export? - именнованных может быть много, а default только один
4 Можно ли сделать два default export в одном файле? - нет
5 Для чего нужен type="module" в HTML? - чтобы дать понять браузеру что скрипт разбит на модули
6 Что такое Node.js? - инструмент позволяющиц запускать JS-код на сервере в терминале без использования браузера
7 Что такое npm? - менеджер JS-пакетов
8 Для чего нужен package.json? - описание проекта
9 Что хранится в node_modules? - подключеные модули
10 Зачем нужен package-lock.json? - тут не уверен, но вроде для передачи пакетов проекта другим разработчикам.

Задание 1. Именованный экспорт
calculator.js
export function sum(a, b) {
    return a + b;
};

export function subtract(a, b) {
    return a - b;
};

export const multiplier = 2;

main.js
import {multiplier, sum, subtract} from "./calculator.js";

console.log(sum(1, 3));
console.log(subtract(10, 5));
console.log(multiplier);

Задание 2. Default export
user.js
export default {
    name: "Alex",
    age: 25,
    city: "London"
};

main.js
import {multiplier, sum, subtract} from "./calculator.js";
import userData from "./user.js"

console.log(sum(1, 3));
console.log(subtract(10, 5));
console.log(multiplier);
console.log(userData.name);
console.log(userData.age);
console.log(userData.city);

Задание 3. Переименование
main.js
import {multiplier, sum, subtract} from "./calculator.js";
import userData from "./user.js";
import {multiply as mult, divide as div} from "./numbers.js";

console.log(sum(1, 3));
console.log(subtract(10, 5));
console.log(multiplier);
console.log(userData.name);
console.log(userData.age);
console.log(userData.city);
console.log(mult(22, 7));
console.log(div(15, 5));

Задание 4. Node.js
Name: Alex
Age: 25

Задание 5. npm
PS D:\js-studying\day-11\mini-project> npm.cmd init -y
Wrote to D:\js-studying\day-11\mini-project\package.json:

{
  "name": "mini-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

package.json
{
  "name": "mini-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node main.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}

PS D:\js-studying\day-11\mini-project> npm.cmd run start

> mini-project@1.0.0 start
> node main.js

My first npm project!

Задача на понимание
Посмотри на этот код:

math.js:
export function sum(a, b) {
    return a + b;
}

export default function multiply(a, b) {
    return a * b;
}


main.js:
import multiply, { sum } from "./math.js";

console.log(sum(10, 5));
console.log(multiply(10, 5));


Ответь:
1 Почему multiply импортируется без фигурных скобок? - потому-что используется default export
2 Почему sum импортируется с фигурными скобками? - потому-что используется именованый экспорт
3 Что выведет программа? - 21 и 50

Мини-проект — калькулятор из модулей
calculator.js
export function add(a, b) {
    return a + b;
};

export function subtract(a, b) {
    return a - b;
};

export function multiply(a, b) {
    return a * b;
};

export function divide(a, b) {
    if (b == 0) {
        return "Error: second operand cannot be zero!";
    } else {
        return a / b;
    };
};

main.js
import {add, subtract, multiply, divide} from "./calculator.js";

const a = 15;
const b = 21;

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b))
console.log(divide(a, 0));

index.html
<!DOCTYPE html>
<html>
    <head>
        <title>Calculator</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <script type="module" src="./main.js"></script>
    </body>
</html>