🥋 День 1 — Типы данных, приведение типов и == vs ===

Начнём не с переменных и if — их ты уже достаточно уверенно используешь. Сегодня закрываем один из пробелов диагностики: как JavaScript работает с типами данных и почему иногда сам преобразует одно значение в другое.

Это фундамент для дальнейшего изучения массивов, объектов, DOM и асинхронного кода.

1. 🧠 Типы данных в JavaScript

В JavaScript значения имеют тип.

Основные типы, которые нам сейчас нужны:

let age = 25;              // number
let name = "Alex";         // string
let isAdmin = true;        // boolean
let city;                  // undefined
let value = null;          // null

Можно проверить тип через typeof:

console.log(typeof 25);        // "number"
console.log(typeof "Alex");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
Важный момент

Переменная не «навсегда» привязана к типу:

let value = 10;

value = "hello";

value = true;

Это нормально для JavaScript.

2. 🔢 number

В JavaScript обычные целые и дробные числа относятся к одному типу:

let age = 25;
let price = 19.99;
let temperature = -10;
typeof age;         // "number"
typeof price;       // "number"

Операции работают привычно:

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
3. 📝 string

Строка:

let name = "Alex";
let city = 'London';

Можно использовать шаблонные строки:

let name = "Alex";
let age = 25;

console.log(`Меня зовут ${name}, мне ${age} лет`);

Результат:

Меня зовут Alex, мне 25 лет

Обрати внимание на обратные кавычки:

`

а не обычные:

"
'
4. ⚠️ Самая интересная часть — + со строками

Посмотри:

let a = 10;
let b = "5";

console.log(a + b);

Результат:

"105"

Почему?

JavaScript видит строку и выполняет конкатенацию — соединение строк.

Условно:

10 → "10"
"10" + "5" → "105"

Поэтому:

console.log(10 + "5"); // "105"
console.log("10" + 5); // "105"

Но с другими математическими операторами ситуация другая:

console.log(10 - "5"); // 5
console.log(10 * "5"); // 50
console.log(10 / "5"); // 2

JavaScript здесь пытается преобразовать "5" в число.

5. 🔄 Приведение типов

Это называется type coercion — приведение типов.

Например:

let number = 10;
let text = "5";

console.log(number - text);

JavaScript фактически делает что-то вроде:

10 - Number("5")

Получается:

5

Можно сделать преобразование самостоятельно:

let text = "123";

let number = Number(text);

console.log(number);        // 123
console.log(typeof number); // "number"

Обратно:

let number = 123;

let text = String(number);

console.log(text);        // "123"
console.log(typeof text); // "string"
6. 🆚 == и ===

Это особенно важно.

=== — строгое сравнение

Сравниваются и значение, и тип.

console.log(5 === 5);     // true
console.log(5 === "5");   // false

Почему второе false?

5   → number
"5" → string

Типы разные.

== — нестрогое сравнение

При == JavaScript может преобразовать типы перед сравнением.

console.log(5 == "5");

Результат:

true

Потому что JavaScript приводит "5" к числу.

Поэтому в современном JavaScript обычно предпочитают:

===

вместо:

==
7. 🧩 Хорошая аналогия

Представь две коробки:

5

и

"5"

В первой лежит число 5.

Во второй лежит текст "5".

=== спрашивает:

«Это одно и то же значение и одного ли оно типа?»

Ответ:

5 === "5" // false

А == спрашивает примерно:

«Если при необходимости привести типы, они окажутся равными?»

5 == "5" // true

Для обучения лучше привыкать мыслить через ===.

8. 🚨 undefined, null и NaN

Ты уже столкнулся с undefined, когда разбирал пустой массив.

undefined

Переменная существует, но значения в ней нет:

let name;

console.log(name); // undefined

Функция тоже может вернуть undefined:

function getFirstElement(array) {
    return array[0];
}

console.log(getFirstElement([])); // undefined
null

null — это уже явно установленное отсутствие значения:

let user = null;

Можно воспринимать как:

«Здесь специально ничего нет».

NaN

NaN означает Not a Number.

Например:

let result = Number("hello");

console.log(result); // NaN

Интересная особенность:

typeof NaN

даёт:

"number"

Это историческая особенность JavaScript.

9. 🧮 Логические значения

Всего два:

true
false

Например:

let age = 20;

console.log(age >= 18); // true
console.log(age < 18);  // false

Их мы активно используем в if:

if (age >= 18) {
    console.log("Доступ разрешён");
}
10. 🧠 Главное правило сегодняшнего дня

Запомни не отдельные магические примеры, а общую идею:

JavaScript хранит значения разных типов
                ↓
операторы могут работать с ними по-разному
                ↓
иногда JavaScript автоматически преобразует тип
                ↓
это называется приведением типов

Особенно:

10 + "5" // "105"
10 - "5" // 5

5 == "5"  // true
5 === "5" // false
🧠 Теория закончилась. Теперь ты.

Код пока не запускай. Сначала хочу проверить, действительно ли ты понял механику.

Вопрос 1

Что выведет каждый console.log?

let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a === b);
console.log(a == b);

Напиши пять результатов по порядку и почему, а не просто ответы.

Вопрос 2

Что произойдёт здесь?

let value = "123";

console.log(typeof value);

value = Number(value);

console.log(typeof value);

Что выведется в двух console.log?

Вопрос 3

Объясни своими словами разницу между:

undefined
null

Можно привести по одному примеру.

Вопрос 4

Что произойдёт здесь?

let result = Number("hello");

console.log(result);
console.log(typeof result);

И почему typeof result будет именно таким?

Вопрос 5 — небольшой подвох 😈

Что выведет:

console.log(10 + 20 + "30");
console.log("10" + 20 + 30);

Здесь особенно интересно в какой момент JavaScript начинает работать со строкой.

После твоих ответов перейдём к практической части Дня 1: несколько задач на исправление кода и небольшая функция, где нужно будет самостоятельно применить приведение типов и ===.

🥋 День 2 — Массивы: методы, изменение и перебор

Сегодня не будем заново разбирать, что такое массив и как обратиться к элементу по индексу — это ты уже знаешь.

Наша цель на сегодня:

уверенно различать методы изменения массива;
понимать, какие методы изменяют исходный массив, а какие создают новый;
освоить push, pop, shift, unshift;
разобраться с slice и splice;
закрепить includes, indexOf;
начать уверенно использовать for...of.
1. Напоминание: массив — это упорядоченная коллекция
let fruits = ["apple", "banana", "orange"];

Индексы начинаются с нуля:

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange

Количество элементов:

console.log(fruits.length); // 3
2. Добавление элементов
push() — добавить в конец
let fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits);

Результат:

["apple", "banana", "orange"]

push() изменяет исходный массив.

Можно добавить сразу несколько элементов:

fruits.push("kiwi", "mango");
unshift() — добавить в начало
let fruits = ["banana", "orange"];

fruits.unshift("apple");

console.log(fruits);

Результат:

["apple", "banana", "orange"]
3. Удаление элементов
pop() — удалить последний элемент
let fruits = ["apple", "banana", "orange"];

let removed = fruits.pop();

console.log(removed); // orange
console.log(fruits);  // ["apple", "banana"]

Важный момент: pop() не только меняет массив, но и возвращает удалённый элемент.

shift() — удалить первый элемент
let fruits = ["apple", "banana", "orange"];

let removed = fruits.shift();

console.log(removed); // apple
console.log(fruits);  // ["banana", "orange"]
4. Схема четырёх основных методов

Запомни:

push()    → добавить в конец
pop()     → удалить с конца

unshift() → добавить в начало
shift()   → удалить с начала
Метод	Действие	Изменяет массив
push()	добавить в конец	Да
pop()	удалить с конца	Да
unshift()	добавить в начало	Да
shift()	удалить с начала	Да
5. includes() — содержится ли элемент
let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi"));   // false

Метод возвращает boolean:

true
false

Можно использовать в условии:

if (fruits.includes("banana")) {
    console.log("Банан есть в массиве");
}
6. indexOf() — найти индекс элемента
let fruits = ["apple", "banana", "orange"];

console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("kiwi"));   // -1

Если элемента нет, возвращается:

-1

Пример:

if (fruits.indexOf("banana") !== -1) {
    console.log("Элемент найден");
}

Но для простой проверки наличия чаще удобнее:

fruits.includes("banana")
7. slice() — получить часть массива без изменения оригинала
let numbers = [10, 20, 30, 40, 50];

let part = numbers.slice(1, 4);

console.log(part);
console.log(numbers);

Результат:

[20, 30, 40]
[10, 20, 30, 40, 50]

Важно:

slice(start, end)

end не включается.

То есть:

slice(1, 4)

берёт индексы:

1, 2, 3
slice() без второго аргумента
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(2));

Результат:

[30, 40, 50]
Копирование массива
let copy = numbers.slice();

Теперь copy — новый массив.

8. splice() — изменяет массив

splice() может:

удалять элементы;
добавлять элементы;
заменять элементы.

Общий синтаксис:

array.splice(start, deleteCount, item1, item2, ...);
Удаление
let numbers = [10, 20, 30, 40, 50];

numbers.splice(1, 2);

console.log(numbers);

Результат:

[10, 40, 50]

Почему?

Начинаем с индекса 1:

10, [20, 30], 40, 50

Удалили два элемента.

Добавление
let numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 30);

console.log(numbers);

Результат:

[10, 20, 30, 40, 50]

0 означает: ничего не удалять.

Замена
let numbers = [10, 20, 30];

numbers.splice(1, 1, 99);

console.log(numbers);

Результат:

[10, 99, 30]
9. slice() vs splice()

Это часто путают.

slice()
→ создаёт новый массив
→ оригинал не меняет

splice()
→ изменяет оригинальный массив
→ может удалять, добавлять и заменять

Сравнение:

let numbers = [1, 2, 3, 4];

let result = numbers.slice(1, 3);

console.log(result);  // [2, 3]
console.log(numbers); // [1, 2, 3, 4]

А:

let numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers); // [1, 4]
10. for...of — перебор элементов

Ты уже использовал похожий цикл в своей функции поиска чётных чисел.

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}

Результат:

10
20
30

Здесь number — это сам элемент, а не индекс.

Сравни:

Обычный for
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for...of
for (let number of numbers) {
    console.log(number);
}

for...of удобнее, когда индекс не нужен.

11. Важная тема: изменяемый массив или новый массив?

Посмотри:

let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

Исходный массив изменён:

[1, 2, 3, 4]

А slice():

let numbers = [1, 2, 3];

let copy = numbers.slice();

copy.push(4);

console.log(numbers); // [1, 2, 3]
console.log(copy);    // [1, 2, 3, 4]

Потому что copy — отдельный массив.

🧠 Теория закончилась. Теперь ты.

Пока не запускай код. Сначала ответь теоретически.

Вопрос 1

Что выведет код?

let numbers = [10, 20, 30];

let removed = numbers.pop();

console.log(removed);
console.log(numbers);
Вопрос 2

Что выведет код?

let fruits = ["apple", "banana", "orange"];

fruits.unshift("kiwi");
fruits.push("mango");
fruits.shift();

console.log(fruits);

Распиши изменения по шагам.

Вопрос 3

В чём разница между:

slice()
splice()

Объясни своими словами и приведи короткий пример каждого.

Вопрос 4

Что выведет:

let numbers = [1, 2, 3, 4, 5];

let result = numbers.slice(1, 4);

console.log(result);
console.log(numbers);

Почему в result не попадёт элемент с индексом 4?

Вопрос 5

Что выведет:

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}

Что содержит переменная number: индекс или значение элемента?

Вопрос 6 — небольшая ловушка

Что выведет код?

let numbers = [1, 2, 3];

let copy = numbers;

copy.push(4);

console.log(numbers);
console.log(copy);

Подумай внимательно: это копия массива или две переменные, указывающие на один и тот же массив?