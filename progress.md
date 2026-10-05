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

🥋 День 3 — Объекты: свойства, методы и ссылки
🎯 Цели дня

После занятия ты должен уверенно уметь:

создавать объекты;
получать и изменять свойства;
использовать . и [];
добавлять и удалять свойства;
работать с вложенными объектами;
перебирать свойства;
использовать Object.keys(), Object.values(), Object.entries();
понимать, что объект можно изменять даже через const;
понимать разницу между копированием объекта и копированием ссылки.
1. 🧠 Что такое объект?

Объект — это структура, которая хранит данные в формате:

ключ → значение

Например:

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

Здесь:

name → "Alex"
age  → 25
city → "London"

name, age, city — это свойства объекта.

2. Получение свойства через .

Самый простой способ:

console.log(user.name);
console.log(user.age);

Результат:

Alex
25

То есть:

user.name

означает:

Возьми свойство name объекта user.

3. Квадратные скобки []

Можно сделать то же самое:

console.log(user["name"]);
console.log(user["age"]);

Результат тот же:

Alex
25

Поэтому:

user.name

и

user["name"]

в данном случае делают одно и то же.

4. Почему нужны оба варианта?

Вот здесь начинается интересное.

Через точку имя свойства пишется непосредственно:

user.name

А через [] можно использовать переменную:

let property = "name";

console.log(user[property]);

Результат:

Alex

А вот:

console.log(user.property);

будет искать свойство буквально с именем "property".

То есть:

user[property]

означает:

Возьми значение переменной property → "name" → найди свойство name.

5. Изменение свойства

Объект можно изменять:

let user = {
    name: "Alex",
    age: 25
};

user.age = 26;

console.log(user);

Получим:

{
    name: "Alex",
    age: 26
}

Можно изменить и через []:

user["age"] = 27;
6. Добавление нового свойства

Если свойства ещё нет, простое присваивание его создаст:

let user = {
    name: "Alex"
};

user.city = "London";

console.log(user);

Получим:

{
    name: "Alex",
    city: "London"
}

И через скобки:

user["age"] = 25;

Теперь:

{
    name: "Alex",
    city: "London",
    age: 25
}
7. Удаление свойства — delete

Для удаления используется оператор:

delete user.age;

Например:

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

delete user.age;

console.log(user);

Получим:

{
    name: "Alex",
    city: "London"
}
8. Свойство может содержать что угодно

Значением свойства может быть:

строка;
число;
boolean;
массив;
объект;
функция;
null;
и т. д.

Например:

let user = {
    name: "Alex",
    age: 25,
    isAdmin: true,
    skills: ["JavaScript", "HTML", "CSS"]
};

Получить первый навык:

console.log(user.skills[0]);

Результат:

JavaScript
9. Вложенные объекты

Объект может содержать другой объект:

let user = {
    name: "Alex",
    age: 25,
    address: {
        city: "London",
        street: "Baker Street",
        house: 221
    }
};

Теперь:

console.log(user.address.city);

Результат:

London

Можно продолжать цепочку:

user.address.house
10. Объекты и массивы вместе

Очень распространённая структура:

let users = [
    {
        name: "Alex",
        age: 25
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "Anna",
        age: 22
    }
];

Это массив объектов.

Получаем первого пользователя:

console.log(users[0]);

Получаем его имя:

console.log(users[0].name);

Получаем возраст второго:

console.log(users[1].age);

Здесь одновременно работают:

массив → индекс → объект → свойство
11. Перебор массива объектов

Например:

for (let user of users) {
    console.log(user.name);
}

Получим:

Alex
John
Anna

А можно вывести несколько свойств:

for (let user of users) {
    console.log(`${user.name}: ${user.age}`);
}
12. Object.keys()

Иногда нам нужны ключи объекта.

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

console.log(Object.keys(user));

Получим массив:

["name", "age", "city"]

То есть:

Object.keys()
       ↓
   ключи объекта
13. Object.values()

Если нужны значения:

console.log(Object.values(user));

Получим:

["Alex", 25, "London"]

Схема:

Object.keys()   → ключи
Object.values() → значения
14. Object.entries()

А если нужны и ключи, и значения:

console.log(Object.entries(user));

Получим примерно:

[
    ["name", "Alex"],
    ["age", 25],
    ["city", "London"]
]

Каждая внутренняя пара:

[ключ, значение]
15. Перебор объекта через Object.entries()

Например:

for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

Получим:

name Alex
age 25
city London

Здесь мы впервые встречаем интересную конструкцию:

let [key, value]

Это называется деструктуризацией массива.

Мы подробнее разберём её позже, а сейчас достаточно понимать:

["name", "Alex"]

раскладывается на:

key   = "name"
value = "Alex"
16. Объект может содержать функцию

Функция внутри объекта называется методом объекта.

let user = {
    name: "Alex",

    sayHello: function() {
        console.log("Hello!");
    }
};

Вызов:

user.sayHello();

Получим:

Hello!

Позже здесь появится очень важная тема — this.

Например:

let user = {
    name: "Alex",

    sayHello: function() {
        console.log(this.name);
    }
};

user.sayHello();

Результат:

Alex

this подробно изучим отдельно, сегодня главное знать, что методы объекта существуют.

17. Современная запись метода

Вместо:

let user = {
    sayHello: function() {
        console.log("Hello");
    }
};

можно писать:

let user = {
    sayHello() {
        console.log("Hello");
    }
};

Это более современный и распространённый синтаксис.

18. ⚠️ const и объекты

Вот здесь вспоминаем нашу проблему из Дня 2.

const user = {
    name: "Alex"
};

user.name = "John";

Это разрешено.

Почему?

Потому что const запрещает:

user = другойОбъект;

Но не запрещает менять содержимое объекта:

user.name = "John";

Условно:

user
 ↓
┌─────────────────┐
│ name: "Alex"    │
└─────────────────┘

const говорит:

Переменная user должна продолжать ссылаться на этот объект.

Но сам объект можно изменять.

19. Ссылки на объекты

И вот здесь очень важная концепция.

let user = {
    name: "Alex"
};

let anotherUser = user;

anotherUser.name = "John";

console.log(user.name);

Что получится?

John

Почему?

Потому что:

let anotherUser = user;

не создаёт новый объект.

Обе переменные ссылаются на один объект:

user ──────────┐
               ↓
          ┌─────────────┐
          │ name: Alex  │
          └─────────────┘
               ↑
               │
anotherUser ───┘

Поэтому изменение через anotherUser видно через user.

20. Поверхностное копирование через spread

Позже разберём spread подробно, но сейчас познакомимся:

let user = {
    name: "Alex",
    age: 25
};

let copy = { ...user };

copy.name = "John";

console.log(user.name);
console.log(copy.name);

Получим:

Alex
John

Теперь это два разных объекта.

user ──→ { name: "Alex", age: 25 }

copy ──→ { name: "John", age: 25 }

Это называется поверхностной копией — shallow copy.

С вложенными объектами есть дополнительные нюансы, которые изучим позже.

🧠 Теория закончилась. Теперь ты.
Вопрос 1

Что выведет?

let user = {
    name: "Alex",
    age: 25
};

console.log(user.name);
console.log(user["age"]);

И объясни разницу между двумя способами доступа.

Вопрос 2

Что выведет?

let user = {
    name: "Alex"
};

let property = "name";

console.log(user[property]);
console.log(user.property);

Почему результаты разные?

Вопрос 3

Что произойдёт?

let user = {
    name: "Alex",
    age: 25
};

user.city = "London";
user.age = 26;

delete user.name;

console.log(user);

Какой объект останется?

Вопрос 4

Что выведет?

let user = {
    name: "Alex",
    address: {
        city: "London",
        street: "Baker Street"
    }
};

console.log(user.address.city);

Почему здесь нужны две точки?

Вопрос 5

Что вернут:

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

Не обязательно воспроизводить формат вывода идеально — главное объяснить содержимое.

Вопрос 6 — ловушка 🔥

Что выведется?

let user = {
    name: "Alex"
};

let copy = user;

copy.name = "John";

console.log(user.name);
console.log(copy.name);

Почему?

Вопрос 7 — const

Что произойдёт?

const user = {
    name: "Alex"
};

user.name = "John";

console.log(user.name);

Будет ошибка или "John"?

Объясни почему.

💻 Практика

Теперь код пишешь самостоятельно.

Задание 1 — создание объекта

Создай объект user со свойствами:

name → "Alex"
age → 25
city → "London"
isAdmin → false

Выведи в консоль:

имя;
возраст;
город;
является ли пользователь администратором.

Используй точечную запись.

Задание 2 — изменение объекта

Используя предыдущий объект:

Измени age на 26.
Измени city на "Paris".
Добавь свойство job со значением "Developer".
Удали isAdmin.
Выведи итоговый объект.

Для добавления job используй квадратные скобки:

user["job"] = ...
Задание 3 — динамический доступ 🔥

Есть:

let user = {
    name: "Alex",
    age: 26,
    city: "Paris"
};

И:

let property = "city";

Напиши код, который выведет значение свойства, указанного в property.

Затем измени:

property = "name";

и снова выведи значение.

Твоя конструкция должна работать без изменения самого объекта.

Задание 4 — вложенный объект

Создай:

user
 ├── name
 ├── age
 └── address
      ├── city
      └── street

Например:

{
    name: "Alex",
    age: 25,
    address: {
        city: "London",
        street: "Baker Street"
    }
}

Затем:

Выведи город.
Выведи улицу.
Измени город на "Paris".
Выведи объект после изменения.
Задание 5 — массив объектов

Создай массив:

let users = [
    {
        name: "Alex",
        age: 25
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "Anna",
        age: 22
    }
];

Используя for...of, выведи:

Alex — 25
John — 30
Anna — 22
Задание 6 — Object.keys, values, entries

Создай объект:

let product = {
    name: "Laptop",
    price: 1000,
    brand: "Lenovo"
};

Выведи отдельно:

все ключи;
все значения;
все пары ключ-значение.

Используй:

Object.keys()
Object.values()
Object.entries()
Задание 7 — работа с Object.entries() 🔥

Есть:

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

Используя Object.entries() и for...of, выведи:

name: Alex
age: 25
city: London

Подсказка: можешь использовать:

for (let [key, value] of Object.entries(user)) {
    // ...
}
🥋 Задание 8 — ссылки на объекты

Сначала не запускай.

Предскажи:

let user = {
    name: "Alex",
    age: 25
};

let copy = user;

copy.age = 30;

console.log(user);
console.log(copy);

После этого напиши код, который создаёт настоящую поверхностную копию объекта.

Используй:

...

То есть spread-синтаксис.

Затем измени возраст только в копии и докажи двумя console.log(), что оригинал не изменился.

🥋 Финальное задание — мини-система пользователей

Вот здесь уже собираем всё вместе.

Создай массив пользователей:

let users = [
    {
        name: "Alex",
        age: 25,
        city: "London"
    },
    {
        name: "John",
        age: 17,
        city: "Paris"
    },
    {
        name: "Anna",
        age: 30,
        city: "Berlin"
    }
];

Напиши функцию:

function printAdults(users) {
    // твой код
}

Она должна:

Перебрать пользователей через for...of.
Проверить возраст.
Если пользователю 18 или больше — вывести:
Alex — 25 — London
Anna — 30 — Berlin
Несовершеннолетних не выводить.
Дополнительная часть 🔥

После этого добавь пользователю Alex свойство:

isAdmin: true

А пользователю Anna:

isAdmin: false

И измени функцию так, чтобы для взрослых пользователей выводилось ещё и:

Alex — 25 — London — Admin: true
Anna — 30 — Berlin — Admin: false
🎯 На что я буду смотреть сегодня

Особенно внимательно проверю четыре вещи:

user.name
user["name"]

понимаешь ли ты разницу;

Object.keys()
Object.values()
Object.entries()

понимаешь ли, что они возвращают;

let copy = user

vs

let copy = { ...user }

понимаешь ли разницу между ссылкой и копией;

и, конечно:

массив объектов
     ↓
for...of
     ↓
объект
     ↓
свойство

Это одна из самых важных комбинаций для дальнейшего JavaScript — особенно когда дойдём до map, filter, API и DOM.

Присылай ответы на вопросы и весь код практики одним сообщением. Я проверю всё по порядку и отдельно отмечу места, где стоит остановиться и закрепить материал. 🥋

🥋 День 4 — Функции в JavaScript

Ты уже умеешь создавать обычные функции:

function sum(a, b) {
    return a + b;
}

Сегодня сделаем следующий шаг и разберём, как функции устроены глубже и почему функции в JavaScript настолько важны.

1. Параметры и аргументы

Например:

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alex");

Здесь:

function greet(name)

name — параметр функции.

А здесь:

greet("Alex");

"Alex" — аргумент, который мы передали функции.

Можно запомнить:

Параметр — переменная в объявлении функции.
Аргумент — конкретное значение при вызове.

2. Несколько параметров
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

Здесь:

a = 10
b = 20

Результат:

30
3. Параметры по умолчанию

Можно задать значение, которое будет использоваться, если аргумент не передали:

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Alex");  // Hello, Alex!
greet();        // Hello, Guest!

Это называется default parameter.

Ещё пример:

function multiply(a, b = 2) {
    return a * b;
}

multiply(5);    // 10
multiply(5, 3); // 15
4. Function Expression

Функцию можно сохранить в переменную:

const sum = function(a, b) {
    return a + b;
};

console.log(sum(2, 3));

Здесь функция является значением, которое хранится в переменной sum.

Сравни:

Function Declaration
function sum(a, b) {
    return a + b;
}
Function Expression
const sum = function(a, b) {
    return a + b;
};

Обе формы используются постоянно.

5. Arrow Functions

Теперь одна из самых важных конструкций современного JavaScript.

Вместо:

function sum(a, b) {
    return a + b;
}

можно написать:

const sum = (a, b) => {
    return a + b;
};

А если функция состоит из одного выражения, можно ещё короче:

const sum = (a, b) => a + b;

Это называется неявный return.

То есть:

const square = x => x * x;

означает примерно:

const square = function(x) {
    return x * x;
};
Важный момент

Вот это:

const sum = (a, b) => a + b;

возвращает результат автоматически.

А здесь:

const sum = (a, b) => {
    a + b;
};

результат не возвращается.

Нужен:

const sum = (a, b) => {
    return a + b;
};
6. Когда параметр один

Скобки можно опустить:

const square = x => x * x;

Вместо:

const square = (x) => x * x;

Но если параметров несколько:

const sum = (a, b) => a + b;

скобки обязательны.

7. Функции могут возвращать что угодно

Не только числа.

Строку:
function getName() {
    return "Alex";
}
Boolean:
function isAdult(age) {
    return age >= 18;
}
Массив:
function getNumbers() {
    return [1, 2, 3];
}
Объект:
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

Можно даже короче:

function createUser(name, age) {
    return {
        name,
        age
    };
}
8. Функция как значение

Это очень важная идея JavaScript.

Функцию можно:

положить в переменную;
передать в другую функцию;
вернуть из другой функции.

Например:

const greet = function() {
    console.log("Hello!");
};

Теперь greet содержит функцию.

Можно передать её другой функции:

function execute(fn) {
    fn();
}

execute(greet);

Получим:

Hello!

Функция greet здесь называется callback — функция, переданная другой функции.

9. Callback

Например:

function processNumber(number, callback) {
    const result = callback(number);
    console.log(result);
}

function double(x) {
    return x * 2;
}

processNumber(5, double);

Происходит:

5
↓
double(5)
↓
10

double — callback.

То же самое можно написать с arrow function:

processNumber(5, x => x * 2);

Это очень важная концепция, потому что именно callbacks активно используются в:

map()
filter()
find()
forEach()
10. Rest parameter ...

Иногда мы не знаем заранее, сколько аргументов передадут функции.

Например:

function sum(...numbers) {
    console.log(numbers);
}

Теперь:

sum(1, 2, 3);

получим:

[1, 2, 3]

А:

sum(10, 20, 30, 40, 50);

получим:

[10, 20, 30, 40, 50]

...numbers собирает все оставшиеся аргументы в массив.

Поэтому можно сделать:

function sum(...numbers) {
    let result = 0;

    for (let number of numbers) {
        result += number;
    }

    return result;
}

console.log(sum(1, 2, 3, 4));

Результат:

10
🧠 Теоретические вопросы

Теперь проверим понимание.

Вопрос 1

Что выведет?

function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("Alex");

Что здесь является параметром, а что аргументом?

Вопрос 2

Что выведет?

function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 3));
Вопрос 3

В чём разница?

function sum(a, b) {
    return a + b;
}

и

const sum = (a, b) => a + b;
Вопрос 4 🔥

Что выведет?

const test = (a, b) => {
    a + b;
};

console.log(test(2, 3));

Почему?

Вопрос 5

Что такое callback?

Объясни своими словами на примере:

function execute(fn) {
    fn();
}
Вопрос 6

Что выведет?

function show(...numbers) {
    console.log(numbers);
}

show(1, 2, 3, 4);

Какой тип данных будет у numbers?

Вопрос 7 🔥

Что здесь происходит?

const double = x => x * 2;

const result = double(5);

Объясни пошагово.

💻 Практика

Теперь код.

Задание 1 — параметры

Напиши функцию:

greet(name, age)

которая выводит:

Hello, Alex! You are 25 years old.

Для:

greet("Alex", 25);
Задание 2 — default parameter

Создай:

function greet(name = "Guest")

Чтобы:

greet("Alex");

выводил:

Hello, Alex

а:

greet();

выводил:

Hello, Guest
Задание 3 — Function Expression

Создай функцию square через Function Expression:

const square = ...

Она должна принимать число и возвращать его квадрат.

Например:

console.log(square(5));

Результат:

25
Задание 4 — Arrow Function

Создай:

const isAdult = ...

которая принимает возраст и возвращает:

true

если возраст >= 18, иначе:

false

Например:

console.log(isAdult(20)); // true
console.log(isAdult(15)); // false
Задание 5 — Arrow Function + массив

Создай функцию:

getFirst(numbers)

которая возвращает первый элемент массива.

Например:

console.log(getFirst([10, 20, 30]));

Результат:

10

Попробуй сделать её именно через arrow function.

🔥 Задание 6 — callback

Есть функция:

function processNumber(number, callback) {
    return callback(number);
}

Создай callback, который умножает число на 2.

Затем:

console.log(processNumber(10, ...));

должно вывести:

20

Попробуй передать callback как arrow function прямо при вызове.

🔥 Задание 7 — callback + массив

Создай функцию:

processNumbers(numbers, callback)

Она должна пройти по массиву и применить callback к каждому числу.

Например:

console.log(processNumbers([1, 2, 3], ...));

Если callback умножает число на 2, результат должен быть:

[2, 4, 6]

Пока не используй map() самостоятельно.

Попробуй сделать через обычный for...of.

Подсказка:

let result = [];

for (let number of numbers) {
    // что-то здесь
}

return result;
🥋 Задание 8 — rest parameter

Напиши функцию:

sumAll(...)

которая принимает любое количество чисел и возвращает их сумму.

Например:

console.log(sumAll(1, 2, 3));

→ 6

console.log(sumAll(10, 20, 30, 40));

→ 100

Обязательно используй:

...numbers
🏆 Финальный мини-проект — «Обработчик пользователей»

У нас есть:

let users = [
    { name: "Alex", age: 25 },
    { name: "John", age: 17 },
    { name: "Anna", age: 30 },
    { name: "Mike", age: 15 }
];

Нужно создать функцию:

processUsers(users, callback)

Она должна:

пройти по всем пользователям;
передать каждого пользователя в callback;
собрать результаты в новый массив;
вернуть этот массив.

Например, callback:

user => user.name

должен дать:

["Alex", "John", "Anna", "Mike"]

А callback:

user => user.age >= 18

должен дать:

[true, false, true, false]
Главное условие

Не используй map().

Мы специально сами реализуем упрощённую версию map, чтобы ты понял, как callback работает внутри.

🎯 Что нужно прислать мне

Можешь одним сообщением прислать:

ответы на 7 теоретических вопросов;
код заданий 1–8;
код финального мини-проекта.

Я проверю всё целиком, укажу ошибки без повторения уже освоенного материала, и если День 4 пройден — перейдём к следующей теме. 🥋