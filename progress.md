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

🥋 День 5. Современный JavaScript (ES6+)
1. Template literals — шаблонные строки
Ты уже встречал такой синтаксис:
let name = "Alex";
let age = 25;

console.log(`Hello, ${name}! You are ${age} years old.`);


Обрати внимание на обратные кавычки ` вместо обычных кавычек.
Внутри можно вставлять выражения через ${...}:
console.log(`2 + 3 = ${2 + 3}`);
// 2 + 3 = 5


Можно даже вызывать функции:
const double = number => number * 2;

console.log(`Double: ${double(5)}`);
// Double: 10


Это удобнее, чем соединять строки через +.

2. Destructuring — деструктуризация массивов
Допустим, у нас есть массив:
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];

console.log(first);  // 10
console.log(second); // 20


Можно записать короче:
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30


JavaScript берёт элементы массива по порядку и присваивает их переменным.
Пропуск элементов
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30


Второй элемент пропущен.
Значения по умолчанию
const numbers = [10];

const [first, second = 100] = numbers;

console.log(first);  // 10
console.log(second); // 100


Значение 100 используется, потому что второго элемента нет.

3. Destructuring — деструктуризация объектов
Раньше мы писали:
const user = {
    name: "Alex",
    age: 25,
    city: "London"
};

const name = user.name;
const age = user.age;


Теперь можно так:
const user = {
    name: "Alex",
    age: 25,
    city: "London"
};

const { name, age } = user;

console.log(name); // Alex
console.log(age);  // 25


Важное отличие от массива: в объекте переменные соответствуют именам свойств, а не позиции.
Можно выбрать другое имя переменной:
const { name: userName } = user;

console.log(userName); // Alex


Здесь name — имя свойства, а userName — новая переменная.
Значения по умолчанию
const user = {
    name: "Alex"
};

const { name, age = 18 } = user;

console.log(name); // Alex
console.log(age);  // 18


Если свойства age нет или оно равно undefined, используется значение по умолчанию.

4. Destructuring в параметрах функций
Деструктуризацию можно использовать прямо в параметрах.
Вместо:
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
}

printUser({ name: "Alex", age: 25 });


Можно написать:
function printUser({ name, age }) {
    console.log(name);
    console.log(age);
}

printUser({ name: "Alex", age: 25 });


Функция получает объект, но сразу извлекает из него name и age.
Это особенно удобно, когда объект содержит много свойств, а функции нужны только некоторые из них.

5. Spread ... — разворачивание массива
Ты уже использовал ... в rest-параметрах:
function sumAll(...numbers) {
    // ...
}


Но у ... есть и другое применение.
Например, объединение массивов:
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined);
// [1, 2, 3, 4, 5, 6]


Spread разворачивает элементы массивов в новый массив.
Копирование массива
const numbers = [1, 2, 3];

const copy = [...numbers];

copy.push(4);

console.log(numbers); // [1, 2, 3]
console.log(copy);    // [1, 2, 3, 4]


В отличие от let copy = numbers, здесь создаётся новый массив.
Но помни: это поверхностная копия. Если внутри массива лежат объекты, они по-прежнему могут быть общими для обоих массивов.

6. Spread ... — работа с объектами
Копирование объекта
const user = {
    name: "Alex",
    age: 25
};

const copy = { ...user };

copy.age = 30;

console.log(user.age); // 25
console.log(copy.age); // 30


Создан новый объект с теми же свойствами верхнего уровня.
Добавление свойств
const user = {
    name: "Alex",
    age: 25
};

const updatedUser = {
    ...user,
    city: "London"
};

console.log(updatedUser);


Результат:
{
    name: "Alex",
    age: 25,
    city: "London"
}


Исходный объект user не изменился.
Переопределение свойств
const user = {
    name: "Alex",
    age: 25
};

const updatedUser = {
    ...user,
    age: 30
};

console.log(updatedUser.age); // 30


Если одинаковое свойство указано несколько раз, обычно побеждает последнее значение.
Поэтому порядок важен:
const first = { ...user, age: 30 }; // age: 30
const second = { age: 30, ...user }; // age: 25



7. Rest ... — оставшиеся элементы
В деструктуризации массивов ... позволяет собрать остаток элементов:
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40]


А в объектах:
const user = {
    name: "Alex",
    age: 25,
    city: "London"
};

const { name, ...otherInfo } = user;

console.log(name);      // Alex
console.log(otherInfo); // { age: 25, city: "London" }


Важно: в этих примерах ...rest собирает оставшиеся элементы или свойства в новый массив или объект.
Как различать spread и rest?
- Spread разворачивает содержимое: const copy = [...numbers].
- Rest собирает остаток: const [first, ...rest] = numbers.
Символ одинаковый, но роль определяется контекстом.

8. Optional chaining ?.
Представим, что у пользователя может отсутствовать адрес.
const user = {
    name: "Alex"
};

console.log(user.address.city);


Этот код вызовет ошибку: user.address равен undefined, а у него нельзя прочитать city.
Решение:
console.log(user.address?.city);


Результат:
undefined


Оператор ?. останавливает обращение, если значение слева от него равно null или undefined.
Можно использовать и для цепочки вложенных свойств:
const user = {
    address: {
        city: "London"
    }
};

console.log(user.address?.city); // London


И для необязательного вызова метода:
user.sayHello?.();


Если sayHello отсутствует или равен null/undefined, вызова не произойдёт. Но если свойство существует и не является функцией, возникнет ошибка.

9. Nullish coalescing ??
Допустим, у пользователя может не быть имени:
const user = {};

const name = user.name ?? "Guest";

console.log(name); // Guest


?? возвращает правую часть, только если левая равна null или undefined.
Сравни с ||:
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

console.log("" || "Guest"); // Guest
console.log("" ?? "Guest"); // ""

console.log(null ?? "Guest"); // Guest
console.log(undefined ?? "Guest"); // Guest


Почему это важно?
|| считает 0, false и "" ложными значениями. А ?? не заменяет их, потому что они не являются null или undefined.
Используй ??, когда нужно задать значение по умолчанию именно для отсутствующего значения.

10. Сокращённая запись свойств объекта
Раньше:
const name = "Alex";
const age = 25;

const user = {
    name: name,
    age: age
};


Современная запись:
const name = "Alex";
const age = 25;

const user = {
    name,
    age
};


Если имя переменной совпадает с именем свойства, его можно указать один раз.
Это называется property shorthand.
Ещё пример:
function createUser(name, age) {
    return { name, age };
}

console.log(createUser("Alex", 25));



🧠 Контрольные вопросы
Попробуй ответить своими словами и предсказать результаты.
Вопрос 1 — деструктуризация массива
const numbers = [10, 20, 30];

const [a, , c] = numbers;

console.log(a);
console.log(c);


Что выведется и почему?
Вопрос 2 — деструктуризация объекта
const user = {
    name: "Alex",
    age: 25
};

const { name: userName, city = "London" } = user;

console.log(userName);
console.log(city);


Что выведется? Чем name отличается от userName?
Вопрос 3 — spread
const numbers = [1, 2, 3];
const copy = [...numbers];

copy.push(4);

console.log(numbers);
console.log(copy);


Почему массивы разные?
Вопрос 4 — порядок spread
const user = {
    name: "Alex",
    age: 25
};

const first = { ...user, age: 30 };
const second = { age: 30, ...user };

console.log(first.age);
console.log(second.age);


Почему результаты различаются?
Вопрос 5 — optional chaining
const user = {
    name: "Alex"
};

console.log(user.address?.city);


Что выведется? Почему не будет ошибки?
Вопрос 6 — ?? против ||
console.log(0 || 10);
console.log(0 ?? 10);

console.log(false || true);
console.log(false ?? true);


Предскажи все четыре результата и объясни разницу.
Вопрос 7 — rest
const numbers = [5, 10, 15, 20];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);


Что делает ...rest?
Вопрос 8 — параметры функции
function printUser({ name, age }) {
    console.log(`${name}: ${age}`);
}

printUser({ name: "Anna", age: 22 });


Что получит функция и что выведет?

💻 Практические задания
Задание 1 — шаблонная строка
Создай переменные:
const name = "Alex";
const age = 25;
const city = "London";


Выведи одной шаблонной строкой:
Alex is 25 years old and lives in London.


Задание 2 — деструктуризация массива
Дан массив:
const colors = ["red", "green", "blue", "yellow"];


Используя деструктуризацию, создай переменные firstColor и thirdColor.
Выведи их в консоль.
Задание 3 — деструктуризация объекта
Дан объект:
const user = {
    name: "Anna",
    age: 28,
    city: "Prague"
};


Извлеки в отдельные переменные name и city.
Затем извлеки age, назвав переменную userAge.
Задание 4 — функция с деструктуризацией
Напиши функцию printProduct, которая получает объект товара:
{
    name: "Laptop",
    price: 1000
}


Функция должна выводить:
Laptop costs 1000


Используй деструктуризацию прямо в параметрах функции.
Задание 5 — копирование и объединение массивов
Даны:
const first = [1, 2, 3];
const second = [4, 5, 6];


Создай новый массив combined, объединив оба массива через spread.
Затем создай независимую копию copy, добавь в неё число 7 и проверь, что combined не изменился.
Задание 6 — копирование объекта
Дан объект:
const user = {
    name: "Alex",
    age: 25,
    city: "London"
};


Создай updatedUser, который:
- содержит все свойства user;
- имеет возраст 26;
- содержит новое свойство job со значением "Developer".
Используй spread. Исходный объект менять нельзя.
Задание 7 — optional chaining и ??
Дан объект:
const user = {
    name: "Alex",
    address: {
        city: "Prague"
    }
};


Выведи город пользователя, а если адреса или города нет, используй "Unknown".
Сделай так, чтобы выражение не вызывало ошибку при отсутствии address.
Проверь решение на двух объектах: с адресом и без адреса.
Задание 8 — rest и spread
Напиши функцию:
function calculateTotal(...prices) {
    // ...
}


Она должна принимать любое количество цен и возвращать их сумму.
Затем создай массив:
const prices = [10, 20, 30];


Вызови функцию, передав элементы массива через spread:
calculateTotal(...prices);


Результат должен быть 60.

🏆 Финальный мини-проект — обработчик профиля пользователя
Есть исходный объект:
const user = {
    name: "Alex",
    age: 25,
    address: {
        city: "Prague",
        street: "Main Street"
    },
    skills: ["JavaScript", "HTML", "CSS"]
};


Создай функцию createUserSummary(user), которая возвращает новый объект, содержащий:
- name — имя пользователя;
- age — возраст;
- city — город или "Unknown", если адреса нет;
- firstSkill — первый навык или "No skills", если навыков нет;
- isAdult — true, если возраст не меньше 18, иначе false.
Условия:
1. Используй деструктуризацию объекта.
2. Используй optional chaining ?..
3. Используй ?? для значений по умолчанию.
4. Не изменяй исходный объект.
5. Создай второй объект без address и с пустым массивом skills, чтобы проверить обработку отсутствующих данных.
Пример ожидаемого результата для исходного пользователя:
{
    name: "Alex",
    age: 25,
    city: "Prague",
    firstSkill: "JavaScript",
    isAdult: true
}


Для пользователя без адреса и навыков должны быть city: "Unknown" и firstSkill: "No skills".

🎯 Что прислать на проверку
Одним сообщением:
1. Ответы на 8 контрольных вопросов.
2. Код заданий 1–8.
3. Финальный мини-проект с двумя проверками.
Не переживай, если где-то запутаешься в ..., ?. или ?? — это как раз то, что мы сегодня закрепляем. Проверю решения, отмечу реальные ошибки и не буду заставлять тебя повторять то, что ты уже хорошо знаешь.
Удачи, ученик. Работаем! 🥋

🥋 День 6 — DOM: JavaScript взаимодействует с HTML
Сегодня переходим от работы с данными к работе с веб-страницей. До этого ты писал код, который обрабатывал числа, массивы и объекты. Теперь научишься с помощью JavaScript находить HTML-элементы, менять их содержимое, изменять стили, создавать новые элементы и удалять их.
Цель дня: создать интерактивную страницу, которой JavaScript управляет прямо в браузере.









1. Основы DOM
Как браузер представляет HTML и как JavaScript получает доступ к элементам.











2. Поиск и изменение элементов
querySelector, textContent, атрибуты, классы и стили.











3. Создание и удаление элементов
createElement, append, remove.



Весь урок находится ниже: теория, контрольные вопросы, восемь практических заданий и финальный мини-проект. Можешь пройти всё и прислать ответы одним сообщением.

Часть 1. Что такое DOM?
DOM (Document Object Model) — это представление HTML-документа в виде структуры объектов, с которой JavaScript может работать.
Допустим, у нас есть HTML:
<body>
    <h1 id="title">Привет!</h1>
    <p class="description">Моя первая страница</p>
    <button>Нажми меня</button>
</body>


Браузер читает HTML и создаёт DOM-структуру. JavaScript может обратиться к заголовку, изменить его текст или удалить абзац.
Упрощённо это выглядит так:
document
Весь HTML-документ

body
Содержимое страницы

h1
Заголовок


p
Абзац


button
Кнопка



Упрощённая схема: реальные DOM-узлы могут содержать текстовые узлы и другие вложенные элементы.

Главная идея: JavaScript не изменяет исходный HTML-файл на диске. Он изменяет DOM в памяти браузера, а браузер обновляет отображение страницы.
Часть 2. Как подключить JavaScript к HTML
Для практики сегодня будем использовать обычные файлы HTML и JS. Создай папку, например day-6, а внутри два файла:
- index.html
- script.js
В index.html напиши:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>День 6 — DOM</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1 id="title">Привет, ученик!</h1>
    <p class="description">Изучаем DOM</p>
</body>
</html>


В script.js:
console.log("JavaScript подключён!");


Открой index.html в браузере. Чтобы посмотреть вывод console.log, открой инструменты разработчика клавишей F12 и перейди во вкладку Console.
Что делает defer? Он позволяет браузеру загрузить скрипт параллельно с разбором HTML, но выполнить его после разбора документа. Поэтому к моменту выполнения скрипта HTML-элементы уже доступны.
Без defer, если скрипт находится в <head>, JavaScript может выполниться до того, как браузер создаст нужные элементы.

Часть 3. Поиск элементов
1. document.querySelector()
Находит первый элемент, соответствующий CSS-селектору.
const title = document.querySelector("#title");
const paragraph = document.querySelector(".description");
const body = document.querySelector("body");


Селекторы знакомы по CSS:
Селектор	Что ищет
"h1"	Первый элемент h1
"#title"	Элемент с id="title"
".description"	Первый элемент с классом description
"div p"	Первый абзац внутри div
Обрати внимание: в JavaScript перед id нужен #, а перед классом — точка.
Если подходящего элемента нет, querySelector() возвращает null.
const button = document.querySelector("#missing");

console.log(button); // null


Поэтому вызов button.textContent = "Привет" в таком случае вызовет ошибку: у null нет свойства textContent.
2. document.querySelectorAll()
Находит все подходящие элементы и возвращает коллекцию NodeList.
<p class="item">Первый</p>
<p class="item">Второй</p>
<p class="item">Третий</p>


const items = document.querySelectorAll(".item");

console.log(items.length); // 3

items.forEach(item => {
    console.log(item.textContent);
});


Важно различать:
- querySelector() — один элемент или null.
- querySelectorAll() — коллекция всех совпадений, даже если она пустая.

Часть 4. Изменение содержимого
textContent
Читает или меняет текстовое содержимое элемента.
<h1 id="title">Старый текст</h1>


const title = document.querySelector("#title");

console.log(title.textContent); // Старый текст

title.textContent = "Новый текст";


После выполнения на странице будет отображаться «Новый текст».
innerHTML
Читает или меняет HTML-содержимое элемента, включая разметку.
const title = document.querySelector("#title");

title.innerHTML = "Привет, <strong>ученик</strong>!";


Внутри заголовка появится элемент <strong>, и слово «ученик» будет выделено жирным.
Сравним:
title.textContent = "<strong>Привет!</strong>";


Это покажет буквальный текст <strong>Привет!</strong>, а не жирный текст.
title.innerHTML = "<strong>Привет!</strong>";


Это создаст HTML-элемент strong.
Правило безопасности: для обычного пользовательского текста предпочитай textContent. Если вставлять непроверенные данные через innerHTML, можно случайно создать уязвимость XSS.

Часть 5. Атрибуты, классы и стили
Атрибуты
У HTML-элементов могут быть атрибуты: href, src, alt, disabled и другие.
<a id="link" href="https://example.com">Сайт</a>


const link = document.querySelector("#link");

console.log(link.getAttribute("href"));
// https://example.com

link.setAttribute("href", "https://openai.com");

console.log(link.getAttribute("href"));
// https://openai.com


Можно проверить наличие атрибута и удалить его:
const button = document.querySelector("#button");

console.log(button.hasAttribute("disabled"));

button.removeAttribute("disabled");


Классы: classList
Допустим, в CSS есть:
.active {
    color: green;
    font-weight: bold;
}


HTML:
<p id="message">Сообщение</p>


JavaScript:
const message = document.querySelector("#message");

message.classList.add("active");
message.classList.remove("active");
message.classList.toggle("active");

console.log(message.classList.contains("active"));


- add() — добавляет класс.
- remove() — удаляет класс.
- toggle() — добавляет класс, если его нет, и удаляет, если он есть.
- contains() — проверяет, присутствует ли класс.
Часто лучше управлять оформлением через CSS-классы, а не прописывать стили по одному.
Изменение стилей напрямую
const title = document.querySelector("#title");

title.style.color = "red";
title.style.fontSize = "32px";
title.style.backgroundColor = "yellow";


В JavaScript составные CSS-свойства обычно записываются в camelCase: background-color превращается в backgroundColor.
Напрямую через style удобно менять отдельные стили, но для повторно используемого оформления обычно лучше применять классы.

Часть 6. Создание и удаление элементов
document.createElement()
Создаёт новый DOM-элемент, но сам по себе не добавляет его на страницу.
const paragraph = document.createElement("p");

paragraph.textContent = "Я создан через JavaScript!";


Теперь элемент существует, но пока не отображается в документе.
append() и prepend()
Чтобы добавить элемент в документ:
<div id="container">
    <p>Уже существующий элемент</p>
</div>


const container = document.querySelector("#container");

const newParagraph = document.createElement("p");
newParagraph.textContent = "Новый абзац";

container.append(newParagraph);


append() добавляет в конец содержимого контейнера, а prepend() — в начало.
Можно добавить сразу несколько узлов или текстовых значений с помощью append().
remove()
Удаляет элемент из DOM:
const paragraph = document.querySelector("#paragraph");

paragraph.remove();


Полный пример
<ul id="list"></ul>


const list = document.querySelector("#list");

const item = document.createElement("li");
item.textContent = "Изучить DOM";

list.append(item);


В браузере появится список с одним пунктом.
Запомни главное

Создать элемент — createElement().
Настроить содержимое — textContent.
Вставить в документ — append() или prepend().
Удалить из документа — remove().


Часть 7. Контрольные вопросы 🧠
Сначала ответь на вопросы своими словами. Не обязательно использовать строгие определения — главное, чтобы ты понимал, как работает код.
1. Что такое DOM?

Язык программирования, похожий на JavaScript

Представление HTML-документа в виде структуры объектов

Файл, который хранит CSS-стили



2. Что вернёт querySelector(), если подходящий элемент не найден?

undefined

Пустой массив

null



3. Чем отличаются querySelector() и querySelectorAll()?

Первый находит один элемент, второй — все совпадения

Первый меняет HTML, второй читает HTML

Они работают совершенно одинаково



4. Чем отличаются textContent и innerHTML?

Ничем

textContent работает с текстом, innerHTML — с HTML-разметкой

innerHTML безопаснее для любых пользовательских данных



5. Что делает classList.toggle('active')?

Всегда удаляет класс

Всегда добавляет класс

Переключает наличие класса



6. Что произойдёт после createElement('p')?

Новый абзац сразу появится на странице

Будет создан элемент, который ещё нужно вставить в DOM

Изменится исходный HTML-файл



7. Для чего используется append()?

Добавляет содержимое в конец элемента

Удаляет элемент

Ищет элемент по классу



8. Что выведет код: const el = document.querySelector('#missing'); console.log(el.textContent); если элемента нет?

null

undefined

Возникнет ошибка при обращении к textContent у null


Отправить ответы на проверку
Часть 8. Практические задания 💻
Для заданий 1–7 используй следующий HTML в index.html:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Практика DOM</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1 id="title">Старый заголовок</h1>

    <p class="description">Первый абзац</p>
    <p class="description">Второй абзац</p>

    <a id="link" href="https://example.com">Открыть сайт</a>

    <div id="container">
        <p id="oldParagraph">Этот абзац можно удалить</p>
    </div>

    <ul id="tasks">
        <li>Изучить переменные</li>
    </ul>
</body>
</html>


В script.js выполняй каждое задание отдельно: можешь закомментировать предыдущий код или проверять задания по очереди.
Задание 1 — найти элементы
1. Найди заголовок с id="title".
2. Найди первый абзац с классом description.
3. Найди все абзацы с классом description.
4. Выведи в консоль текст заголовка, текст первого абзаца и количество найденных абзацев.
Задание 2 — изменить текст
1. Измени заголовок на DOM изучен!.
2. Измени текст первого абзаца на Я изучаю JavaScript.
3. Измени текст второго абзаца на Я умею работать с DOM.
4. Используй textContent, а не innerHTML.
Задание 3 — HTML-разметка
Измени заголовок так, чтобы на странице отображалось:
Привет, JavaScript!
Слово JavaScript должно быть выделено жирным через HTML-тег <strong>.
Сделай это двумя способами:
1. Через innerHTML.
2. Через createElement() и append().
Во втором способе не вставляй HTML-строку через innerHTML.
Задание 4 — атрибуты
Для ссылки с id="link":
1. Выведи в консоль её href.
2. Измени href на https://openai.com.
3. Добавь атрибут target="_blank".
4. Проверь наличие атрибута target через hasAttribute().
Задание 5 — классы и стили
Добавь через JavaScript класс active заголовку.
Для этого задания добавь в HTML внутри <head> следующий CSS:
<style>
    .active {
        color: green;
        font-size: 36px;
    }
</style>


Затем:
1. Добавь класс active заголовку.
2. Проверь наличие класса через contains().
3. Удали класс.
4. Переключи его состояние через toggle().
5. Дополнительно измени цвет заголовка на синий через style.color.
Задание 6 — создать элемент
Внутри #container создай новый абзац с текстом:
Я был создан с помощью JavaScript!
Требования:
- используй createElement();
- задай текст через textContent;
- добавь абзац в конец контейнера через append().
Задание 7 — удалить элемент
Найди абзац с id="oldParagraph" и удали его с помощью remove().
Затем проверь через querySelector(), существует ли он ещё в DOM.
Какой результат получишь в консоли?
Задание 8 — обработка массива и создание элементов
Теперь объедини уже знакомые массивы с DOM.
Дан массив:
const products = [
    "Ноутбук",
    "Мышь",
    "Клавиатура",
    "Монитор"
];


Создай список на странице, в котором каждый продукт будет отдельным элементом <li>.
Требования:
1. Найди список #tasks.
2. Пройди по массиву с помощью for...of.
3. Для каждого продукта создай li.
4. Запиши название продукта в textContent.
5. Добавь элемент в список через append().
Дополнительное условие: не удаляй существующий пункт Изучить переменные. Новые продукты должны добавиться после него.

Часть 9. 🏆 Финальный мини-проект — менеджер задач
Создадим небольшое приложение, которое показывает задачи пользователя на странице. Пока без событий и кнопок — это будет темой следующего урока. Сегодня сосредоточимся на генерации DOM из данных.
Предпросмотр результата
Пример того, что должен отображать твой код.
Мои задачи
Изучить переменные

Повторить массивы

Изучить DOM

Создать первый проект


Всего задач: 4


Исходные данные
В index.html:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Менеджер задач</title>

    <style>
        .completed {
            color: green;
            text-decoration: line-through;
        }

        .task-list {
            padding-left: 24px;
        }
    </style>

    <script src="script.js" defer></script>
</head>
<body>
    <h1 id="title">Мои задачи</h1>
    <ul id="taskList" class="task-list"></ul>
    <p id="counter"></p>
</body>
</html>


В script.js:
const tasks = [
    { title: "Изучить переменные", completed: true },
    { title: "Повторить массивы", completed: false },
    { title: "Изучить DOM", completed: false },
    { title: "Создать первый проект", completed: false }
];


Твои задачи
1. Найди элементы
Получи ссылки на заголовок, список и счётчик через querySelector().
2. Создай список
Перебери массив tasks. Для каждого объекта:
- создай элемент li;
- присвой task.title свойству textContent;
- если task.completed === true, добавь класс completed;
- вставь элемент в taskList.
3. Выведи статистику
В counter запиши количество задач в формате:
Всего задач: 4
Используй tasks.length.
4. Дополнительное задание
Вычисли количество выполненных задач с помощью filter() и выведи ещё одну строку:
Выполнено: 1 из 4
Для этого можешь создать отдельный абзац через createElement() и вставить его на страницу.
Критерии успешного выполнения
- Все четыре задачи отображаются на странице.
- Выполненная задача имеет зелёный цвет и зачёркнутый текст.
- Количество задач выводится корректно.
- Дополнительная статистика правильно считает выполненные задачи.
- Для создания элементов используется DOM API, а не склеивание HTML-строк через innerHTML.

Как прислать работу сенсею
Пришли одним сообщением:
1. Ответы на 8 контрольных вопросов.
2. Код заданий 1–8.
3. Код финального мини-проекта.
Если код получается длинным, можешь отправить один блок с script.js и указать, к какому заданию относится каждый фрагмент. Проверю логику, результаты и возможные ошибки отдельно от стилистических замечаний.
И главное: сегодня не нужно учить всё наизусть. Важно понять связь: JavaScript получает элемент через DOM, меняет его или создаёт новый, а браузер отображает результат. На следующем уроке добавим обработчики событий — и страница начнёт реагировать на действия пользователя. 💪

День 7. События в JavaScript (Events)









1. addEventListener()

Как подписаться на событие и выполнить функцию в нужный момент.











2. click, input, submit

Реакция на нажатия, ввод текста и отправку формы.











3. Объект события и preventDefault()

Как узнать подробности события и управлять стандартным поведением браузера.



Весь урок — в этом сообщении. В конце будут контрольные вопросы, восемь практических заданий и мини-проект. Можешь выполнить всё и прислать одним сообщением.

Часть 1. Что такое событие?
Событие (event) — это то, что произошло в браузере: пользователь нажал кнопку, ввёл символ, отправил форму, переместил мышь и так далее.

Например, в HTML есть кнопка:
<button id="myButton">Нажми меня</button>


Найдём её в JavaScript:
const button = document.querySelector("#myButton");


Но пока ничего не произойдёт, когда пользователь нажмёт кнопку. Мы только нашли элемент и сохранили ссылку на него.

Чтобы реагировать на нажатие, используем addEventListener().
Часть 2. addEventListener()
Общий синтаксис:
element.addEventListener("eventName", callback);


Здесь:
- element — элемент, за которым наблюдаем;
- "eventName" — название события;
- callback — функция, которую браузер вызовет, когда событие произойдёт.
Пример:
const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    console.log("Кнопка нажата!");
});


Когда пользователь нажмёт кнопку, в консоли появится сообщение.

То же самое со стрелочной функцией:
button.addEventListener("click", () => {
    console.log("Кнопка нажата!");
});


Оба варианта корректны.
Важный нюанс: мы передаём функцию, а не вызываем её
Сравни:
button.addEventListener("click", sayHello);


И:
button.addEventListener("click", sayHello());


В первом случае браузер получит функцию sayHello и вызовет её при событии.

Во втором случае sayHello() вызовется сразу, а результат её выполнения будет передан в addEventListener(). Обычно это не то, что нам нужно.

Посмотри на полный пример:
<button id="myButton">Поздороваться</button>
<p id="message"></p>

<script src="script.js" defer></script>


const button = document.querySelector("#myButton");
const message = document.querySelector("#message");

function sayHello() {
    message.textContent = "Привет, ученик!";
}

button.addEventListener("click", sayHello);


Теперь текст изменится только после нажатия кнопки.

Запомни: addEventListener() не запускает обработчик сразу. Он регистрирует функцию, которую браузер вызовет при событии.

Часть 3. Событие click
click происходит, когда пользователь нажимает на элемент.

Например, создадим счётчик кликов:
<p id="counter">0</p>
<button id="increase">Увеличить</button>


const counter = document.querySelector("#counter");
const increaseButton = document.querySelector("#increase");

let count = 0;

increaseButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});


Что происходит при каждом нажатии?
1. count++ увеличивает число на единицу.
2. counter.textContent = count обновляет текст на странице.
Обрати внимание на разделение ответственности: переменная хранит данные, а textContent отображает их пользователю.

Это уже знакомые тебе переменные и DOM, только теперь они работают вместе с событиями.

Часть 4. Событие input
Событие input происходит, когда пользователь изменяет значение поля ввода.

HTML:
<input id="nameInput" type="text" placeholder="Введи имя">
<p id="greeting"></p>


JavaScript:
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");

nameInput.addEventListener("input", () => {
    greeting.textContent = `Привет, ${nameInput.value}!`;
});


Здесь новое свойство — .value.
- textContent — текст внутри элемента.
- value — текущее значение поля ввода.
Если пользователь введёт Alex, на странице появится Привет, Alex!.

Можно также очистить поле:
nameInput.value = "";


Важно: input срабатывает по мере изменения значения. Событие change обычно срабатывает, когда изменение считается завершённым, например после подтверждения нового значения поля или потери им фокуса — конкретное поведение зависит от типа элемента.

Часть 5. Объект события event
Браузер передаёт обработчику объект события. Обычно его называют event или сокращённо e.
button.addEventListener("click", (event) => {
    console.log(event);
});


В объекте события содержится информация о произошедшем событии.

Например:
button.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.target);
});


- event.type — тип события, например "click".
- event.target — элемент, на котором произошло событие.
- event.currentTarget — элемент, на котором зарегистрирован текущий обработчик.
Для начала главное запомнить разницу между target и currentTarget.

Представь кнопку с текстом внутри:
<button id="buyButton">
    Купить <strong>сейчас</strong>
</button>


Если пользователь нажмёт прямо на слово «сейчас», event.target может оказаться элементом strong. А event.currentTarget будет кнопкой, на которой зарегистрирован обработчик.

Пример:
const buyButton = document.querySelector("#buyButton");

buyButton.addEventListener("click", (event) => {
    console.log("Цель события:", event.target);
    console.log("Обработчик установлен на:", event.currentTarget);
});


Это особенно пригодится позже, когда мы будем обрабатывать клики по вложенным элементам.

Часть 6. Формы и submit
Допустим, у нас есть форма:
<form id="loginForm">
    <input id="username" type="text" placeholder="Имя">
    <button type="submit">Отправить</button>
</form>

<p id="result"></p>


Можно обработать отправку формы:
const form = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    result.textContent = `Привет, ${username.value}!`;
});


Что делает event.preventDefault()?
У браузера есть стандартное поведение для разных событий. При обычной отправке формы браузер может отправить данные и перезагрузить страницу или перейти на другой URL.

preventDefault() отменяет стандартное действие события, если оно отменяемо.

В нашем примере мы отменяем стандартную отправку формы, чтобы обработать данные самостоятельно и показать результат без перезагрузки.

Важная деталь: preventDefault() не останавливает распространение события по DOM. Это другая задача, для которой существует stopPropagation(). Сегодня подробно разбирать её не будем.

Часть 7. Несколько распространённых ошибок
Ошибка 1. Скобки при передаче обработчика
Неправильно для обычного обработчика:
button.addEventListener("click", handleClick());


Правильно:
button.addEventListener("click", handleClick);


Ошибка 2. Попытка прочитать .value у несуществующего поля
const input = document.querySelector("#missing");
console.log(input.value);


Если элемента нет, input будет равен null, и обращение к .value вызовет ошибку.
Ошибка 3. Не отменили стандартную отправку формы
Если нужно обработать форму без перезагрузки страницы, не забудь:
event.preventDefault();


Ошибка 4. Забыли обновить DOM
Изменить переменную недостаточно:
let count = 0;

button.addEventListener("click", () => {
    count++;
});


Число увеличивается, но пользователь не увидит изменения, пока ты не обновишь элемент:
counter.textContent = count;



Часть 8. Контрольные вопросы 🧠
1. Для чего нужен addEventListener()?

Немедленно вызывает функцию

Регистрирует обработчик события

Создаёт новый HTML-элемент



2. Что произойдёт при button.addEventListener('click', sayHello)?

sayHello вызовется немедленно

sayHello будет вызвана при событии click

sayHello никогда не вызовется



3. Как получить текущее значение input?

input.textContent

input.innerHTML

input.value



4. Когда обычно происходит событие input?

При изменении значения поля ввода

Только при отправке формы

Только при нажатии Enter



5. Что означает event.type для обработчика click?

Текст кнопки

Тип события — click

Элемент, на который нажали



6. Что делает event.preventDefault()?

Удаляет HTML-элемент

Отменяет стандартное действие события, если оно отменяемо

Всегда перезагружает страницу



7. Где обычно обрабатывают событие submit?

На форме

Только на поле input

На document.title



8. Чем отличаются event.target и event.currentTarget?

Это всегда одно и то же

target — элемент, на котором произошло событие; currentTarget — элемент с текущим обработчиком

target — всегда форма, currentTarget — всегда кнопка


Отправить ответы на проверку

Часть 9. Практические задания 💻
Создай папку day-7, а в ней index.html и script.js. Для заданий 1–7 можешь использовать этот HTML:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Практика Events</title>
    <script src="script.js" defer></script>
</head>
<body>
    <button id="helloButton">Поздороваться</button>
    <p id="message"></p>

    <button id="increase">Увеличить</button>
    <p id="counter">0</p>

    <input id="nameInput" type="text" placeholder="Введи имя">
    <p id="greeting"></p>

    <button id="inspectButton">
        Нажми <strong>сюда</strong>
    </button>

    <form id="userForm">
        <input id="userName" type="text" placeholder="Имя">
        <button type="submit">Отправить</button>
    </form>
    <p id="formResult"></p>
</body>
</html>


Выполняй задания по очереди: перед запуском нового можешь закомментировать код предыдущего.
Задание 1 — обработчик click
При нажатии на helloButton меняй текст message на:

Привет! Ты нажал кнопку.

Используй addEventListener().
Задание 2 — счётчик
При каждом нажатии на increase увеличивай число в counter на единицу.

Условия:
- начальное значение счётчика — 0;
- используй переменную для хранения числа;
- обновляй DOM после каждого нажатия.
Задание 3 — реакция на ввод
Когда пользователь вводит текст в nameInput, показывай в greeting:

Привет, [имя]!

Если поле пустое, показывай:

Привет, незнакомец!

Используй событие input и свойство value.
Задание 4 — объект события
Добавь обработчик click на inspectButton.

Внутри обработчика выведи в консоль:
- event.type;
- event.target;
- event.currentTarget.
Понажимай на текст кнопки и непосредственно на слово внутри strong. Посмотри, чем отличаются target и currentTarget.
Задание 5 — отправка формы
При отправке userForm:
1. Отмени стандартное поведение формы через preventDefault().
2. Прочитай значение поля userName.
3. Покажи в formResult сообщение Привет, [имя]!.
Дополнительно: если поле пустое, покажи Введи своё имя.
Задание 6 — переключатель текста
Добавь в HTML:
<button id="toggleButton">Показать/скрыть</button>
<p id="toggleText">Секретный текст</p>


Сделай так, чтобы кнопка скрывала и показывала текст по очереди. Можешь использовать element.style.display или класс CSS.

Подсказка: для стилей используются строки "none" и "", если ты работаешь через style.display.
Задание 7 — изменение класса по клику
Добавь в HTML:
<style>
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
</style>

<p id="highlightText">Нажми кнопку, чтобы выделить этот текст</p>
<button id="highlightButton">Выделить</button>


При каждом нажатии на кнопку переключай класс highlight у абзаца через classList.toggle().
Задание 8 — добавление задачи через форму
Создай отдельную простую страницу со следующим HTML:
<form id="taskForm">
    <input id="taskInput" type="text" placeholder="Новая задача">
    <button type="submit">Добавить</button>
</form>

<ul id="taskList"></ul>


Напиши JavaScript, который при отправке формы:
1. Отменяет стандартную отправку через preventDefault().
2. Берёт текст из taskInput.
3. Если поле пустое, ничего не добавляет.
4. Создаёт новый li через createElement().
5. Записывает в него текст через textContent.
6. Добавляет элемент в taskList.
7. Очищает поле ввода.
Не забудь, что для каждой новой задачи нужно создавать новый li внутри обработчика события — по аналогии с циклом из вчерашнего урока.

Часть 10. 🏆 Финальный мини-проект — интерактивный список задач
Сегодня объединим DOM из Дня 6 и события из Дня 7.

Создай файл index.html:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мой список задач</title>

    <style>
        .completed {
            color: green;
            text-decoration: line-through;
        }

        li {
            cursor: pointer;
            margin-bottom: 8px;
        }
    </style>

    <script src="script.js" defer></script>
</head>
<body>
    <h1>Мои задачи</h1>

    <form id="taskForm">
        <input id="taskInput" type="text" placeholder="Новая задача">
        <button type="submit">Добавить задачу</button>
    </form>

    <ul id="taskList"></ul>

    <p id="counter"></p>
</body>
</html>


Что нужно реализовать
1. Начальный массив

Создай массив:
const tasks = [
    { title: "Изучить DOM", completed: true },
    { title: "Изучить события", completed: false }
];


2. Отображение задач

Создай функцию renderTasks(), которая:
- очищает содержимое taskList;
- перебирает массив tasks через for...of;
- для каждой задачи создаёт новый li;
- устанавливает текст задачи;
- если completed равно true, добавляет класс completed;
- добавляет элемент в список;
- обновляет счётчик задач.
Для очистки содержимого списка можешь использовать:
taskList.textContent = "";


Счётчик должен показывать, например:

Всего задач: 2

3. Добавление задачи

Подпишись на событие submit формы.
- Отмени стандартное поведение.
- Получи текст из поля ввода.
- Если текст пустой, не добавляй задачу.
- Создай новый объект задачи с completed: false.
- Добавь объект в массив tasks через push().
- Очисти поле ввода.
- Вызови renderTasks().
4. Отметка задачи выполненной

Подпишись на событие click каждого созданного li.

При нажатии:
- переключи значение task.completed между true и false;
- вызови renderTasks(), чтобы обновить оформление.
Подсказка: при создании каждого li ты можешь добавить обработчик, который замыкает переменную текущей задачи.

Например, внутри цикла for...of:
item.addEventListener("click", () => {
    // Здесь можно изменить текущую task
});


5. Проверка

Убедись, что:
- начальные две задачи отображаются;
- выполненная задача зачёркнута;
- новая задача добавляется после отправки формы;
- пустая задача не добавляется;
- клик по задаче переключает её статус;
- счётчик обновляется после добавления.

Как прислать работу
Одним сообщением отправь:
1. Ответы на 8 контрольных вопросов.
2. Код практических заданий 1–8.
3. Код script.js финального мини-проекта.
Если что-то не получилось, всё равно присылай код — разберём вместе, без необходимости заранее доводить всё до идеала.

Главная цель дня: понять, что addEventListener() связывает действия пользователя с твоим JavaScript-кодом. Вчера ты создавал элементы программно, а теперь пользователь сможет управлять ими сам. 💪🔥

До встречи на проверке, ученик! 🥋

(analysis) 
We need final concatenation issue: previous partial final had day6? Here we need continue from partial. Actually assistant sent partial final in this same turn containing intro then terminal final contains rest. Already visible combined. Need nothing. Wait tool call? It's done. Need perhaps we should ensure no odd imagegen? okay. The output above includes final messages. We should terminate.

День 8. Контекст this в JavaScript
Новый учебный день
 Блок 7 по плану


Сегодня разберём одну из самых интересных и иногда запутанных особенностей JavaScript. После урока ты будешь понимать, почему this в разных функциях может указывать на разные объекты.
1. Что такое this?
this — специальное ключевое слово, которое указывает на определённый объект в зависимости от того, как была вызвана функция.

Посмотрим на пример:
const user = {
    name: "Alex",

    sayHello: function() {
        console.log(this.name);
    }
};

user.sayHello();


Результат:
Alex


Почему?

Потому что функция вызвана через объект user:
user.sayHello();


В данном случае this указывает на user.

Можно представить это так:
this.name


Фактически обращается к:
user.name


Главное правило: у обычной функции значение this обычно определяется способом её вызова, а не местом, где она была объявлена.
2. this в объектах
Рассмотрим несколько примеров.

Пример 1:
const person = {
    name: "Anna",
    age: 25,

    introduce: function() {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
};

person.introduce();


Результат:
My name is Anna
I am 25 years old


Пример 2:

Метод может изменять свойства объекта:
const counter = {
    count: 0,

    increase: function() {
        this.count++;
    }
};

counter.increase();
counter.increase();

console.log(counter.count); // 2


Здесь this.count++ изменяет свойство count объекта counter.

Пример 3:

Один и тот же метод можно вызвать через разные объекты:
const user1 = {
    name: "Alex",
    sayName: function() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Anna",
    sayName: user1.sayName
};

user1.sayName(); // Alex
user2.sayName(); // Anna


Обрати внимание: функция одна и та же, но this разный!

Это потому, что мы вызываем её через разные объекты.
3. this в обычных функциях
Теперь важный момент.

Что произойдёт, если вызвать обычную функцию отдельно, без объекта?
function showThis() {
    console.log(this);
}

showThis();


Здесь результат зависит от режима выполнения JavaScript.
- В строгом режиме ("use strict") this будет undefined.
- В нестрогом режиме в браузере this обычно будет указывать на глобальный объект window.
Для наших дальнейших примеров будем ориентироваться на строгий режим.

Например:
"use strict";

function showName() {
    console.log(this);
}

showName(); // undefined


А теперь сравни:
"use strict";

const user = {
    name: "Alex",

    showName: function() {
        console.log(this.name);
    }
};

user.showName(); // Alex


В первом случае функция вызывается самостоятельно, во втором — как метод объекта.

Запомни: обычная функция не привязана навсегда к объекту, внутри которого была написана.
4. this в стрелочных функциях
Вот здесь начинается самое интересное.

Стрелочные функции ведут себя иначе: они не создают собственный this.

Вместо этого они используют this из внешней области, в которой были созданы. Это называется лексическим this.

Посмотрим:
const user = {
    name: "Alex",

    sayHello: () => {
        console.log(this.name);
    }
};

user.sayHello();


Многие ожидают увидеть "Alex", но это не так.

Почему?

Потому что стрелочная функция не получает this от объекта user.

Она берёт this из внешнего контекста. В данном примере это не объект user.

Сравни два варианта:
Обычная функция
const user = {
    name: "Alex",
    sayHello: function() {
        console.log(this.name);
    }
};

user.sayHello(); // Alex


this = user

Стрелочная функция
const user = {
    name: "Alex",
    sayHello: () => {
        console.log(this.name);
    }
};

user.sayHello();


this берётся снаружи

Поэтому для методов объектов обычно используют обычные функции или сокращённую запись методов:
const user = {
    name: "Alex",

    sayHello() {
        console.log(this.name);
    }
};


Это тоже обычный метод, и здесь this работает как ожидается.
5. Стрелочная функция внутри метода объекта
Но стрелочные функции очень полезны внутри обычных методов.

Посмотри:
const user = {
    name: "Alex",

    sayHello() {
        const showMessage = () => {
            console.log(`Hello, ${this.name}`);
        };

        showMessage();
    }
};

user.sayHello();


Результат:
Hello, Alex


Почему работает?
1. user.sayHello() вызывает обычный метод.
2. Внутри метода this указывает на user.
3. Стрелочная функция берёт this из внешнего метода.
4. Поэтому внутри стрелочной функции this тоже указывает на user.
Это очень распространённый приём.
6. Методы call(), apply() и bind()
Теперь научимся самостоятельно управлять значением this.

Для этого существуют три метода.
call()
call() вызывает функцию и позволяет явно указать, чему будет равен this.
function introduce() {
    console.log(`My name is ${this.name}`);
}

const user = {
    name: "Alex"
};

introduce.call(user);


Результат:
My name is Alex


То есть мы сказали функции:

«Выполнись так, будто this указывает на объект user».

call() также позволяет передавать аргументы:
function introduce(city, age) {
    console.log(`${this.name}, ${age}, ${city}`);
}

const user = {
    name: "Alex"
};

introduce.call(user, "Prague", 25);


apply()
apply() работает практически так же, как call().

Главное отличие — аргументы передаются массивом.
function introduce(city, age) {
    console.log(`${this.name}, ${age}, ${city}`);
}

const user = {
    name: "Alex"
};

introduce.apply(user, ["Prague", 25]);


Сравнение:
introduce.call(user, "Prague", 25);

introduce.apply(user, ["Prague", 25]);


Метод	Передача аргументов
call()	Через запятую
apply()	Одним массивом

bind()
А теперь самое интересное.

bind() не вызывает функцию сразу. Он создаёт новую функцию с заранее привязанным значением this.
function sayHello() {
    console.log(`Hello, ${this.name}`);
}

const user = {
    name: "Alex"
};

const boundFunction = sayHello.bind(user);

boundFunction();


Результат:
Hello, Alex


Можно вызвать boundFunction() позже, а this останется привязанным к user.

Сравним:
Метод	Что делает
call()	Вызывает функцию сразу
apply()	Вызывает функцию сразу
bind()	Создаёт новую привязанную функцию


7. Частая ошибка: потеря this
Посмотри на пример:
const user = {
    name: "Alex",

    sayHello() {
        console.log(this.name);
    }
};

const hello = user.sayHello;

hello();


Почему здесь не обязательно будет "Alex"?

Потому что мы сохранили ссылку на функцию в отдельную переменную, а затем вызвали её самостоятельно.

В строгом режиме this будет undefined.

Исправить можно через bind():
const hello = user.sayHello.bind(user);

hello(); // Alex


Это особенно полезно, когда передаёшь методы объектов в качестве callback-функций.

Часть 2. Контрольные вопросы
Ответь своими словами. Можно приводить примеры.

Вопрос 1. Что такое this в JavaScript?

Вопрос 2. На какой объект указывает this при вызове user.sayHello(), если sayHello — обычный метод?

Вопрос 3. Почему стрелочная функция внутри объекта не получает this от самого объекта?

Вопрос 4. Что выведет код?
const user = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const anotherUser = {
    name: "Anna",
    sayName: user.sayName
};

anotherUser.sayName();


Вопрос 5. Что выведет код в строгом режиме?
"use strict";

function test() {
    console.log(this);
}

test();


Вопрос 6. Чем call() отличается от apply()?

Вопрос 7. Чем bind() отличается от call()?

Вопрос 8. Почему этот код может не вывести "Alex"?
const user = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const fn = user.sayName;
fn();



Часть 3. Практические задания
Все задания выполни самостоятельно. Можно использовать console.log() для проверки.
Задание 1 — метод объекта
Создай объект person со свойствами:
- name: "Alex"
- age: 25
Добавь метод introduce(), который выводит:
My name is Alex and I am 25 years old.


Используй this.
Задание 2 — изменение свойства
Создай объект:
const counter = {
    count: 0
};


Добавь два метода:
- increase() — увеличивает count на 1.
- decrease() — уменьшает count на 1.
Вызови increase() три раза, decrease() один раз.

Ожидаемый результат:
2


Задание 3 — разные объекты, один метод
Создай два объекта:
const user1 = {
    name: "Alex"
};

const user2 = {
    name: "Anna"
};


Создай одну обычную функцию showName(), которая выводит this.name.

Вызови её для обоих объектов, используя call().
Задание 4 — применение apply()
Создай функцию:
function introduce(city, profession) {
    console.log(`${this.name} lives in ${city} and works as ${profession}`);
}


Создай объект:
const person = {
    name: "Mike"
};


Вызови функцию с помощью apply().

Передай аргументы:
- город — "Prague";
- профессия — "Developer".
Задание 5 — применение bind()
Создай объект:
const user = {
    name: "Anna"
};


Создай обычную функцию:
function sayHello() {
    console.log(`Hello, ${this.name}!`);
}


Используя bind(), создай новую функцию helloAnna.

Вызови её два раза.
Задание 6 — обычная или стрелочная?
Исправь код так, чтобы он выводил "Alex":
const user = {
    name: "Alex",

    sayHello: () => {
        console.log(this.name);
    }
};

user.sayHello();


Объясни, почему твоё исправление работает.
Задание 7 — потеря контекста
Исправь код, чтобы sayName() выводил "Alex":
const user = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const fn = user.sayName;

fn();


Используй bind().
Задание 8 — закрепление
Что выведет этот код? Напиши результат каждого вызова и объясни почему.
const user1 = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Anna"
};

user1.sayName();

user1.sayName.call(user2);

const fn = user1.sayName.bind(user2);

fn();



Часть 4. Финальный мини-проект — система пользователей
Теперь применим this, call() и bind() в одной небольшой программе.

Создай массив пользователей:
const users = [
    { name: "Alex", age: 25, city: "Prague" },
    { name: "Anna", age: 22, city: "Brno" },
    { name: "Mike", age: 30, city: "Ostrava" }
];


Требования к проекту:

1. Создай функцию introduce(), которая выводит имя, возраст и город пользователя, используя this.

Ожидаемый формат:
Hello! My name is Alex. I am 25 years old and live in Prague.


2. Перебери массив users циклом for...of и вызови introduce() для каждого пользователя с помощью call().
3. Создай функцию showWelcome(), которая выводит:
Welcome, Alex!


Она тоже должна использовать this.name.
4. Создай отдельную функцию welcomeAlex, привязав showWelcome к первому пользователю через bind().
5. Вызови welcomeAlex() отдельно от массива.
Дополнительное задание, если захочешь: добавь каждому пользователю метод haveBirthday(), который увеличивает его возраст на один год с помощью this.

Чек-лист Дня 8
Прогресс урока
0/8



[ ] Понял, что такое this
[ ] Разобрал this в методах объектов
[ ] Понял отличие обычных и стрелочных функций
[ ] Разобрал call() и apply()
[ ] Разобрал bind()
[ ] Выполнил контрольные вопросы
[ ] Выполнил практические задания
[ ] Сделал мини-проект

Правило нашего обучения: присылай ответы на вопросы, все практические задания и мини-проект одним сообщением, когда закончишь. Я проверю каждую часть, объясню ошибки и отмечу, что уже усвоено.

Ну что, ученик, сегодня особое внимание удели разнице между обычной и стрелочной функцией. Это одна из ключевых идей всего урока.

Удачи! Сенсей на связи. 🥋

День 9. Асинхронный JavaScript
Новый учебный день
 Блок 8 по плану


Сегодня изучим:
1. Синхронный и асинхронный код.
2. setTimeout().
3. Callback-функции.
4. Call Stack.
5. Web APIs.
6. Event Loop.
7. Очередь задач.
8. Promise.
9. .then(), .catch(), .finally().
10. async/await.
11. Обработку ошибок.

Часть 1. Синхронный и асинхронный код
1. Синхронный код
До этого момента почти весь наш код был синхронным.

Это означает, что JavaScript выполняет инструкции последовательно: сначала одну, потом следующую.
console.log("Первый");

console.log("Второй");

console.log("Третий");


Результат:
Первый
Второй
Третий


Вторая инструкция не начнёт выполняться, пока первая не завершится.
2. Асинхронный код
Асинхронный код позволяет запускать операции, результат которых будет обработан позднее, не блокируя выполнение остального кода.

Пример:
console.log("Первый");

setTimeout(() => {
    console.log("Второй");
}, 2000);

console.log("Третий");


Результат:
Первый
Третий
Второй


Почему?
1. Выводится "Первый".
2. JavaScript запускает таймер на 2000 миллисекунд.
3. Не дожидаясь окончания таймера, продолжает выполнять код.
4. Выводится "Третий".
5. Когда таймер завершится и обработчик сможет выполниться, выводится "Второй".
Важно: 2000 миллисекунд — это 2 секунды. setTimeout() задаёт минимальную задержку перед тем, как callback станет готов к выполнению, а не гарантирует запуск ровно через 2 секунды.
Часть 2. setTimeout()
setTimeout() — функция, которая позволяет выполнить другую функцию после определённой задержки.

Синтаксис:
setTimeout(callback, delay);


- callback — функция, которую нужно выполнить позже.
- delay — задержка в миллисекундах.
Пример:
function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 3000);


Через некоторое время появится:
Hello!


Обрати внимание:
setTimeout(sayHello, 3000);


А не:
setTimeout(sayHello(), 3000);


В первом случае мы передаём функцию, чтобы JavaScript вызвал её позже.

Во втором случае мы вызываем функцию сразу, а результат её выполнения передаём в setTimeout().
Можно ли передавать аргументы?
Да!
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Alex");


Через 2 секунды:
Hello, Alex!


setTimeout с переменной
let count = 0;

setTimeout(() => {
    count++;
    console.log(count);
}, 1000);

console.log(count);


Что выведется?
0
1


Сначала выполняется console.log(count), а затем callback увеличивает значение.

Часть 3. Callback-функции
Ты уже знаком с callback-функциями по предыдущим урокам.

Напомню: callback — это функция, которую мы передаём другой функции в качестве аргумента.

Пример:
function processUser(name, callback) {
    console.log(`Processing ${name}`);

    callback();
}

function finished() {
    console.log("Finished!");
}

processUser("Alex", finished);


Результат:
Processing Alex
Finished!


Теперь объединим callback и асинхронность:
function getUser(callback) {
    setTimeout(() => {
        const user = {
            name: "Alex",
            age: 25
        };

        callback(user);
    }, 2000);
}

function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}

getUser(showUser);


Через 2 секунды получим:
Alex
25


Что произошло?
1. Мы вызвали getUser().
2. Передали ей функцию showUser.
3. getUser() запустила таймер.
4. После завершения таймера создался объект user.
5. Callback showUser получил этот объект.
Так часто работают асинхронные операции.
Что такое callback hell?
Иногда callback-функции начинают вкладываться друг в друга:
setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);


При большом количестве таких вложений код становится трудным для чтения и поддержки.

Это называют Callback Hell.

Позже мы увидим, как Promise и async/await помогают решить эту проблему.

Часть 4. Как JavaScript выполняет код
Теперь самая интересная часть урока.

Чтобы понимать асинхронность, нужно познакомиться с четырьмя понятиями:
- Call Stack.
- Web APIs.
- Task Queue.
- Event Loop.
1. Call Stack
Call Stack — стек вызовов функций.

Он хранит информацию о том, какие функции сейчас выполняются.

Посмотри:
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();


Как выполняется код?
1. Вызывается second().
2. second() попадает в Call Stack.
3. Внутри неё вызывается first().
4. first() помещается поверх second().
5. Выполняется first().
6. first() завершается и удаляется из стека.
7. Продолжается выполнение second().
8. second() завершается.
Упрощённо:
Call Stack — стек вызовов
Верх стека

first()

second()

second() вызвала first(), поэтому first() выполняется первой.

2. Web APIs
В браузере есть специальные возможности, которые предоставляются средой браузера.

Например:
- таймеры setTimeout();
- обработчики событий;
- сетевые запросы.
Когда JavaScript встречает setTimeout(), браузерная среда берёт на себя отсчёт времени.

JavaScript не должен самостоятельно ждать эти две секунды.
3. Task Queue
Когда асинхронная операция завершается, её callback может попасть в очередь задач.

Но callback не начинает выполняться немедленно: сначала JavaScript должен освободить Call Stack.
4. Event Loop
Event Loop — механизм, который следит за Call Stack и очередями.

Упрощённо он проверяет:
1. Свободен ли Call Stack?
2. Есть ли готовая задача?
3. Если да — можно ли передать её на выполнение?
Посмотри на схему:
JavaScript

Выполняет синхронный код

Call Stack

Стек вызовов


Web APIs

Таймеры, события, запросы



Task Queue

Очередь готовых задач

Event Loop

Передаёт готовые задачи в Call Stack, когда он свободен


Это упрощённая модель. В JavaScript есть также отдельная очередь микрозадач для Promise — мы разберём её чуть позже.
Проверим понимание
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");


Результат:
A
C
B


Даже при задержке 0 callback не выполняется немедленно. Он должен дождаться своей очереди и освобождения Call Stack.

Часть 5. Promise
Теперь переходим к следующему важному инструменту асинхронного JavaScript.

Promise — объект, который представляет результат асинхронной операции, который может быть доступен сейчас или появиться позднее.

Например, мы отправили запрос на сервер. Ответ ещё не пришёл, но мы уже можем создать Promise, который впоследствии сообщит об успехе или ошибке.

У Promise есть три состояния:
Pending
Ожидание

Асинхронная операция ещё не завершилась.


Fulfilled
Выполнено

Операция завершилась успешно.


Rejected
Отклонено

Операция завершилась ошибкой.


1. Создание Promise
Для создания Promise используется конструктор:
const promise = new Promise((resolve, reject) => {
    // Асинхронная операция
});


Здесь:
- resolve() — сообщает, что операция завершилась успешно.
- reject() — сообщает, что операция завершилась ошибкой.
Пример успешного Promise:
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

console.log(promise);


Promise сразу переходит в состояние fulfilled.

Пример ошибки:
const promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});


Здесь Promise переходит в состояние rejected.

Пока не волнуйся, если синтаксис кажется непривычным. Сейчас разберём, как получать результат.
2. Метод .then()
.then() позволяет обработать успешный результат Promise.
const promise = new Promise((resolve, reject) => {
    resolve("Data received!");
});

promise.then((result) => {
    console.log(result);
});


Результат:
Data received!


Параметр result получает значение, переданное в resolve().

Посмотрим на асинхронный пример:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User loaded!");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

console.log("Waiting...");


Результат:
Waiting...
User loaded!


3. Метод .catch()
А что делать, если Promise завершился ошибкой?

Для этого используется .catch().
const promise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


Результат:
Something went wrong!


catch() получает значение, переданное в reject().
4. Метод .finally()
.finally() выполняется независимо от того, завершился Promise успешно или с ошибкой.
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation finished!");
    });


Результат:
Success!
Operation finished!


Ещё пример с ошибкой:
const promise = new Promise((resolve, reject) => {
    reject("Error!");
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finished!"));


Результат:
Error!
Finished!


Запомни:
Метод	Назначение
.then()	Обработка успешного результата
.catch()	Обработка ошибки
.finally()	Выполняется в конце в любом случае

5. Цепочки Promise
Вызовы .then() можно соединять в цепочки.
Promise.resolve(5)
    .then((number) => {
        return number * 2;
    })
    .then((number) => {
        return number + 10;
    })
    .then((result) => {
        console.log(result);
    });


Результат:
20


Почему?
1. Первый then получает 5.
2. Возвращает 10.
3. Второй then получает 10.
4. Возвращает 20.
5. Третий then выводит 20.
Важно: каждый .then() возвращает новый Promise. Поэтому цепочки можно продолжать.

Часть 6. async и await
Теперь познакомимся с более удобным способом работы с Promise.

async и await позволяют писать асинхронный код в стиле, похожем на обычный последовательный код.
1. Ключевое слово async
Если перед функцией написать async, она автоматически будет возвращать Promise.
async function sayHello() {
    return "Hello!";
}

console.log(sayHello());


Результатом будет Promise, который успешно завершится со значением "Hello!".

Даже если функция возвращает обычную строку, async оборачивает результат в Promise.
2. Ключевое слово await
await используется внутри async-функций и позволяет дождаться результата Promise.

Пример:
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Alex");
        }, 2000);
    });
}

async function showUser() {
    const user = await getUser();

    console.log(user);
}

showUser();


Через две секунды появится:
Alex


Что здесь происходит?
1. showUser() запускается.
2. Вызывается getUser().
3. await ожидает завершения Promise.
4. Когда Promise успешно завершается, значение "Alex" записывается в user.
5. Выполняется console.log(user).
Важный момент: await приостанавливает выполнение текущей async-функции, но не блокирует весь JavaScript.
3. Сравним then и async/await
Один и тот же пример двумя способами.

Через .then():
function getNumber() {
    return Promise.resolve(10);
}

getNumber().then((number) => {
    console.log(number);
});


Через async/await:
async function showNumber() {
    const number = await getNumber();

    console.log(number);
}

showNumber();


Оба варианта выведут:
10


4. Обработка ошибок через try/catch
Мы уже использовали .catch() для обработки ошибок Promise.

С async/await часто применяется знакомый тебе по другим языкам try/catch.
function getUser() {
    return new Promise((resolve, reject) => {
        reject("User not found!");
    });
}

async function showUser() {
    try {
        const user = await getUser();

        console.log(user);
    } catch (error) {
        console.log("Error:", error);
    }
}

showUser();


Результат:
Error: User not found!


Код внутри try выполняется, если ошибки нет.

Если Promise отклоняется, выполнение переходит в catch.

Можно добавить finally:
async function showUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finished!");
    }
}


finally выполнится в любом случае.

Часть 7. Очередь микрозадач — важное дополнение
Мы уже познакомились с Task Queue. Теперь нужно знать, что Promise использует отдельную очередь — Microtask Queue.

Для начала сравним два примера:
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


Результат:
Start
End
Promise
Timeout


Почему?
1. Start выводится сразу.
2. Запускается таймер, его callback попадёт в очередь задач.
3. Callback Promise попадает в очередь микрозадач.
4. Выводится End.
5. Когда синхронный код завершён, выполняются микрозадачи.
6. Затем выполняется callback таймера.
На этом этапе запомни главное: после завершения текущего синхронного кода микрозадачи, например обработчики .then(), выполняются раньше обычных задач таймеров.

Часть 8. Контрольные вопросы
Ответь своими словами. Не подглядывай в теорию, если хочешь проверить настоящее понимание.

Вопрос 1. Чем синхронный код отличается от асинхронного?

Вопрос 2. Что делает setTimeout()?

Вопрос 3. Почему этот код выведет сначала B, а затем A?
console.log("A");

setTimeout(() => {
    console.log("C");
}, 1000);

console.log("B");


Подсказка: здесь есть подвох в формулировке — внимательно посмотри на задержку и порядок.

Вопрос 4. Что такое callback-функция?

Вопрос 5. Что такое Call Stack?

Вопрос 6. Для чего нужны Web APIs?

Вопрос 7. Что делает Event Loop?

Вопрос 8. Какие три состояния может иметь Promise?

Вопрос 9. Для чего используются resolve() и reject()?

Вопрос 10. Чем отличаются .then(), .catch() и .finally()?

Вопрос 11. Что делает async с функцией?

Вопрос 12. Для чего нужен await?

Вопрос 13. Почему await не блокирует весь JavaScript?

Вопрос 14. Что выведет код и почему?
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");



Часть 9. Практические задания
Теперь закрепим всё на практике. Все задания можно выполнять в обычном script.js и проверять через консоль браузера или Node.js.
Задание 1 — порядок выполнения
Предскажи результат, затем проверь:
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");


Напиши порядок вывода и объясни его.
Задание 2 — передача callback
Создай функцию processOrder(callback).

Она должна:
1. Вывести "Order received".
2. Через 2 секунды вызвать callback.
3. Callback должен вывести "Order completed".
Вызови processOrder() и передай ей отдельную функцию.
Задание 3 — Promise с успешным результатом
Создай Promise, который через 2 секунды возвращает строку:
Data loaded!


Обработай результат через .then().
Задание 4 — Promise с ошибкой
Создай Promise, который вызывает reject() со строкой:
Something went wrong!


Обработай ошибку через .catch().
Задание 5 — finally
Создай Promise, который успешно возвращает "Success!".

Используй цепочку:
- .then() выводит результат;
- .catch() выводит ошибку;
- .finally() выводит "Operation finished!".
Проверь, что finally() выполняется.
Задание 6 — цепочка Promise
Создай Promise, который возвращает число 10.

Затем:
1. Первый .then() умножает число на 2.
2. Второй .then() прибавляет 5.
3. Третий .then() выводит результат.
Ожидаемый результат:
25


Задание 7 — async/await
Создай функцию getUser(), которая возвращает Promise.

Через 2 секунды Promise должен вернуть объект:
{
    name: "Alex",
    age: 25
}


Затем создай async-функцию showUser(), которая:
1. Вызывает getUser() через await.
2. Получает объект пользователя.
3. Выводит имя и возраст.
Задание 8 — обработка ошибок
Создай функцию getData(), которая возвращает Promise с ошибкой:
Failed to load data!


Создай async-функцию loadData().

Используй try/catch/finally:
- try — получи данные через await;
- catch — выведи ошибку;
- finally — выведи "Loading finished!".
Задание 9 — Event Loop
Не запускай код сразу. Сначала самостоятельно запиши ожидаемый порядок вывода:
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

setTimeout(() => {
    console.log("5");
}, 0);

Promise.resolve().then(() => {
    console.log("6");
});


Затем проверь в браузере или Node.js.

Объясни, почему получился именно такой порядок.

Часть 10. Финальный мини-проект — имитация загрузки пользователя
Сегодня создадим небольшую систему, которая имитирует получение пользователя с сервера.

Пока настоящего сервера у нас нет, поэтому используем Promise и setTimeout().

Исходные данные:
const users = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Anna", age: 22 },
    { id: 3, name: "Mike", age: 30 }
];


Требования к проекту
1. Создай функцию getUser(id).

Она должна возвращать Promise.

Внутри Promise используй setTimeout() с задержкой 2000 миллисекунд.

После задержки:
- Найди пользователя по id.
- Если пользователь найден — вызови resolve(user).
- Если не найден — вызови reject("User not found!").
Для поиска можешь использовать обычный цикл for...of, который мы уже изучали.

2. Создай async-функцию showUser(id).

Она должна:
- вызвать getUser(id) через await;
- получить пользователя;
- вывести его имя и возраст.
3. Обработай ошибки.

Используй try/catch:
- try — получение пользователя;
- catch — вывод сообщения об ошибке.
4. Добавь finally.

После успешного выполнения или ошибки выведи:
User loading finished!


5. Проверь два сценария:
showUser(1);
showUser(10);


В первом случае пользователь должен быть найден, во втором — должна произойти ошибка.
Ожидаемое поведение проекта

При вызове showUser(1)
Alex
25
User loading finished!



При вызове showUser(10)
User not found!
User loading finished!


Каждый вызов завершится примерно через 2 секунды. При двух вызовах одновременно они могут завершиться примерно в одно время.


Важное уточнение к контрольному вопросу №3
Я допустил неточность в формулировке: код там не выводит сначала B, а потом A.

Правильный порядок:
A
B
C


A и B выполняются синхронно, а C появляется после таймера. Именно это и нужно объяснить.
Чек-лист Дня 9
Прогресс обучения
0/12



[ ] Синхронный и асинхронный код
[ ] setTimeout()
[ ] Callback-функции
[ ] Call Stack
[ ] Web APIs
[ ] Event Loop и Task Queue
[ ] Promise и его состояния
[ ] then(), catch(), finally()
[ ] async/await
[ ] try/catch/finally
[ ] Практические задания
[ ] Финальный мини-проект

Наше правило остаётся прежним: сначала изучаешь теорию, затем выполняешь все контрольные вопросы, практику и мини-проект. Присылай всё одним сообщением — я проверю каждую задачу, включая порядок выполнения асинхронного кода.

И ещё: небольшое испытание с haveBirthday() из прошлого урока можешь прислать вместе с сегодняшней работой, если ещё не успел его проверить.

Удачи, ученик! Сегодня начинается одна из самых важных частей JavaScript. 🥋

День 10. Работа с API
1. Что такое API?
API — это интерфейс, через который одна программа может взаимодействовать с другой.

Представь ресторан:
- Ты — JavaScript-приложение.
- Официант — API.
- Кухня — сервер.
- Заказ — запрос.
- Готовое блюдо — ответ сервера.
Твоё приложение не обязано знать, как сервер хранит данные или обрабатывает их. Оно отправляет запрос и получает ответ.

Например, приложение погоды может запросить:
Дай погоду в Праге


Сервер вернёт данные:
{
    "city": "Prague",
    "temperature": 12,
    "weather": "Cloudy"
}


Это и есть взаимодействие с API.
2. Что такое HTTP?
HTTP — протокол, по которому клиент и сервер обмениваются данными.

Обычно процесс выглядит так:
Клиент (JavaScript)

Отправляет запрос

HTTP Request

Сервер

Обрабатывает запрос

HTTP Response

Клиент (JavaScript)

Получает ответ


У HTTP-запроса есть несколько важных частей:
- URL — адрес, куда отправляется запрос.
- Method — тип действия.
- Headers — дополнительная информация о запросе.
- Body — данные, которые отправляются серверу (если нужны).
У ответа сервера тоже есть части:
- Status — код состояния.
- Headers — информация об ответе.
- Body — содержимое ответа.
Основные HTTP-методы
Метод	Назначение	Пример
GET	Получить данные	Получить список пользователей
POST	Отправить или создать данные	Создать пользователя
PUT	Полностью обновить данные	Заменить профиль
PATCH	Частично обновить данные	Изменить имя
DELETE	Удалить данные	Удалить пользователя

Пока подробно изучаем GET и POST. Остальные просто запомни.
3. HTTP Status Codes
Сервер сообщает о результате запроса с помощью числового статуса.
Код	Значение
200	OK — успешно
201	Created — создано
400	Bad Request — неправильный запрос
401	Unauthorized — требуется авторизация
403	Forbidden — доступ запрещён
404	Not Found — не найдено
500	Internal Server Error — ошибка сервера

Запомни группы:
- 2xx — успешное выполнение.
- 3xx — перенаправление.
- 4xx — проблема в запросе или правах клиента.
- 5xx — проблема на стороне сервера.
Важная деталь: HTTP-ошибка, например 404, сама по себе не означает, что fetch() выбросит исключение. Это разберём чуть ниже.
4. Что такое JSON?
JSON — формат обмена данными между приложениями.

Расшифровывается как JavaScript Object Notation.

Пример:
{
    "id": 1,
    "name": "Alex",
    "age": 25,
    "isAdmin": false,
    "skills": ["JavaScript", "HTML", "CSS"],
    "address": {
        "city": "Prague",
        "country": "Czechia"
    }
}


JSON похож на обычный JavaScript-объект, но это текстовый формат со своими правилами.

Основные правила JSON:
1. Ключи обязательно в двойных кавычках.
2. Строки тоже в двойных кавычках.
3. Нельзя использовать undefined.
4. Нельзя помещать функции.
5. Нельзя оставлять комментарии.
JSON.stringify()
Преобразует JavaScript-объект в JSON-строку.
const user = {
    name: "Alex",
    age: 25
};

const json = JSON.stringify(user);

console.log(json);


Результат:
{"name":"Alex","age":25}


JSON.parse()
Преобразует JSON-строку обратно в JavaScript-значение.
const json = '{"name":"Alex","age":25}';

const user = JSON.parse(json);

console.log(user.name);
console.log(user.age);


Результат:
Alex
25


Запомни:
- JSON.stringify() — объект → строка.
- JSON.parse() — строка → объект или другое JSON-значение.
5. Fetch API — получение данных
Теперь самое интересное.

fetch() — встроенная функция JavaScript, которая позволяет отправлять HTTP-запросы.

Простейший запрос:
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });


Разберём по шагам.

Шаг 1.
fetch("https://jsonplaceholder.typicode.com/users")


Отправляем GET-запрос на сервер.

fetch() возвращает Promise.

Шаг 2.
.then(response => {
    return response.json();
})


Когда сервер ответил, мы получаем объект response.

response.json() читает тело ответа и преобразует JSON в JavaScript-значение. Он тоже возвращает Promise!

Шаг 3.
.then(data => {
    console.log(data);
})


Когда тело ответа обработано, получаем готовые данные.

Шаг 4.
.catch(error => {
    console.log("Error:", error);
});


Обрабатываем сетевые ошибки и другие исключения в цепочке.
Важный нюанс: response.ok
Помнишь, я говорил, что HTTP-ошибки не всегда вызывают catch()?

Например, сервер может ответить статусом 404. При этом fetch() успешно получит HTTP-ответ и выполнит .then().

Чтобы обработать такие ошибки, проверяем response.ok:
fetch("https://jsonplaceholder.typicode.com/users/9999")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


response.ok — это true, если статус находится в диапазоне 200–299.

А throw new Error() создаёт ошибку, которая передаётся в .catch().

Это очень важный момент. Не путай успешное получение HTTP-ответа с успешным результатом самого запроса.
6. Fetch с async/await
Мы уже знаем async и await, поэтому можем записать тот же запрос понятнее:
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUsers();


Порядок выполнения:
1. Отправляется запрос.
2. await ожидает HTTP-ответ.
3. Проверяем статус.
4. response.json() преобразует тело ответа.
5. await ожидает готовые данные.
6. Выводим данные.
Обрати внимание: здесь два await, потому что fetch() и response.json() возвращают Promise.
7. GET — получение конкретного пользователя
У JSONPlaceholder есть тестовый API.

Например:
https://jsonplaceholder.typicode.com/users/1


Он возвращает пользователя с ID 1.

Код:
async function getUser(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        console.log(user.name);
        console.log(user.email);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUser(1);


Здесь мы используем template literals, которые уже изучали.
8. POST — отправка данных
А теперь представим, что мы хотим создать нового пользователя.

Для этого используем POST.
async function createUser() {
    const newUser = {
        name: "Alex",
        username: "alex123",
        email: "alex@example.com"
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

createUser();


Разберём настройки.

method
method: "POST"


Указываем HTTP-метод.

headers
headers: {
    "Content-Type": "application/json"
}


Сообщаем серверу, что отправляем JSON.

body
body: JSON.stringify(newUser)


Отправляем объект в виде JSON-строки.

Почему нельзя просто написать body: newUser?

Потому что тело такого HTTP-запроса должно содержать данные в подходящем формате. Для JSON мы преобразуем объект в строку.

Важное замечание: JSONPlaceholder — тестовый сервис. Он имитирует создание пользователя и возвращает ответ, но не сохраняет его как настоящая база данных.
9. API и асинхронность — что происходит внутри?
Давай свяжем сегодняшнюю тему с предыдущим днём.

Когда вызывается:
const response = await fetch(url);


Происходит следующее:
1. JavaScript запускает запрос.
2. Браузер выполняет сетевую работу вне обычного Call Stack.
3. JavaScript может продолжать выполнять другой код.
4. Когда приходит ответ, Promise завершается.
5. Продолжение async-функции ставится в очередь микрозадач.
6. Event Loop позволяет продолжить выполнение функции, когда Call Stack свободен.
То есть fetch() — ещё один пример асинхронной операции, только теперь мы работаем с настоящей сетью.

10. Контрольные вопросы
Ответь своими словами. Не нужно заучивать определения дословно.
1. Что такое API?
2. Что такое HTTP?
3. Чем запрос отличается от ответа?
4. Для чего используется GET?
5. Для чего используется POST?
6. Что такое JSON?
7. Чем отличаются JSON.stringify() и JSON.parse()?
8. Что делает fetch() и что он возвращает?
9. Что такое response?
10. Для чего нужен response.json()?
11. Почему response.json() тоже требует await?
12. Что проверяет response.ok?
13. Почему HTTP-ошибка 404 не обязательно попадает в .catch()?
14. Для чего нужен заголовок "Content-Type": "application/json"?
15. Почему в POST-запросе мы используем JSON.stringify()?
16. Как fetch() связан с асинхронностью?
11. Практические задания
Все задания можно выполнять в одном JS-файле, но следи, чтобы имена переменных не повторялись.

Задание 1 — JSON

Создай объект:
const user = {
    name: "Anna",
    age: 22,
    city: "Prague"
};


1. Преобразуй его в JSON-строку через JSON.stringify().
2. Выведи строку.
3. Преобразуй её обратно через JSON.parse().
4. Выведи имя и город.
Задание 2 — первый GET-запрос

Используя fetch() и .then():
1. Получи список пользователей:
   https://jsonplaceholder.typicode.com/users
2. Преобразуй ответ через .json().
3. Выведи весь массив.
4. Выведи имена всех пользователей.
Задание 3 — GET с async/await

Создай функцию getUser(id).

Она должна:
1. Получать пользователя по ID.
2. Использовать fetch().
3. Проверять response.ok.
4. Преобразовывать ответ через response.json().
5. Выводить имя, email и город пользователя (address.city).
6. Обрабатывать ошибки через try/catch.
Проверь:
getUser(1);
getUser(2);


Задание 4 — обработка HTTP-ошибки

Создай функцию getUser(id) или используй новую функцию с другим именем.

Попробуй запросить:
https://jsonplaceholder.typicode.com/users/9999


Твоя задача:
1. Проверить response.ok.
2. Если ответ неуспешный, выбросить ошибку через throw new Error().
3. Поймать её в catch.
4. Вывести сообщение об ошибке и статус HTTP.
Подсказка: статус можно получить из response.status. Подумай, как сохранить его, чтобы использовать в catch.

Задание 5 — POST

Создай функцию createUser().

Отправь через POST объект:
{
    name: "Alex",
    username: "alex_dev",
    email: "alex@example.com"
}


Используй:
- method: "POST";
- headers;
- JSON.stringify();
- response.json();
- try/catch;
- проверку response.ok.
Выведи полученный ответ сервера.

Задание 6 — цепочка обработки данных

Получить список пользователей и вывести только тех, кому больше 30 лет.

Используй:
- fetch();
- response.json();
- filter();
- for...of.
Выведи имя и возраст каждого подходящего пользователя.

Задание 7 — API + async/await

Создай функцию getUsers().

Она должна:
1. Получить список пользователей.
2. Преобразовать JSON в массив.
3. Создать новый массив только с именами и email.
Ожидаемый формат нового массива:
[
    { name: "Leanne Graham", email: "..." },
    { name: "Ervin Howell", email: "..." }
]


4. Вывести полученный массив.

Используй map().

12. Финальный мини-проект — приложение загрузки пользователей
Главная практика дня
Сегодня сделаем небольшое приложение, которое загружает пользователей с настоящего API.

Нам понадобится HTML:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Users App</title>
    <script src="script.js" defer></script>
</head>
<body>

    <h1>Users</h1>

    <button id="loadUsers">Загрузить пользователей</button>

    <p id="status"></p>

    <ul id="userList"></ul>

</body>
</html>


Твоя задача — написать JavaScript.
Требования
1. Найди кнопку, список и элемент статуса через querySelector().

2. Создай функцию loadUsers().

Она должна:
- показывать текст Loading...;
- очищать предыдущий список;
- отправлять GET-запрос на JSONPlaceholder;
- проверять response.ok;
- преобразовывать ответ через response.json();
- обрабатывать ошибки через try/catch.
3. После получения пользователей:
- перебери массив через for...of;
- для каждого пользователя создай li;
- выведи имя и email;
- добавь элемент в список.
4. После успешной загрузки выведи:
Users loaded successfully!


5. Если возникла ошибка, выведи её в элемент статуса.

6. Добавь обработчик кнопки:
button.addEventListener("click", loadUsers);


7. Проверь, что повторное нажатие кнопки не дублирует пользователей в списке.

13. Дополнительное усложнение
Если основная часть уже работает, попробуй:
1. Добавить каждому пользователю кнопку Show details.
2. При нажатии показывать город пользователя.
3. Для этого используй user.address.city.
Это необязательное задание, но оно поможет объединить API, DOM и события.

На сегодня всё! Не торопись: здесь много нового, особенно разница между HTTP-ответом, Promise от fetch() и Promise от response.json().

Можешь прислать все ответы, задания и мини-проект одним сообщением — я проверю их внимательно, как обычно, и отдельно отмечу ошибки, улучшения и то, что у тебя уже получается уверенно. Удачи, ученик! 🚀

День 11. Модули, npm и организация проекта
Новый материал
Практика + мини-проект

Цель дня: научиться разделять код на несколько файлов, импортировать и экспортировать функции и данные, понимать назначение npm и package.json.
1. Зачем нужны модули?
Представь, что ты создаёшь приложение для управления задачами. В нём есть:
- работа с задачами;
- отображение задач на странице;
- обработка нажатий кнопок;
- работа с сервером.
Если весь код хранить в одном файле script.js, он постепенно станет огромным и неудобным.

Поэтому код разделяют на отдельные файлы — модули.

Например:
my-project/
│
├── index.html
├── main.js
├── tasks.js
└── utils.js


- main.js — основной файл приложения.
- tasks.js — функции для работы с задачами.
- utils.js — вспомогательные функции.
Каждый файл может содержать собственный код и предоставлять другим файлам нужные функции или значения.
2. export — экспорт
Чтобы другой файл мог использовать функцию или переменную из нашего файла, её нужно экспортировать.

Допустим, у нас есть файл math.js:
export function sum(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const PI = 3.14;


Здесь мы экспортировали две функции и одну переменную.

Есть два основных вида экспорта.

Именованный экспорт (Named Export)
export const name = "Alex";

export function sayHello() {
    console.log("Hello!");
}


Можно экспортировать несколько значений из одного файла.

Экспорт по умолчанию (Default Export)
export default function greet() {
    console.log("Hello!");
}


В одном файле может быть только один default export.

Запомни: именованных экспортов может быть много, а default — только один.
3. import — импорт
Теперь научимся получать экспортированные значения в другом файле.

Допустим, у нас есть math.js:
export function sum(a, b) {
    return a + b;
}

export const PI = 3.14;


В файле main.js:
import { sum, PI } from "./math.js";

console.log(sum(5, 10));
console.log(PI);


Результат:
15
3.14


Обрати внимание на несколько деталей:
- Фигурные скобки {} используются для именованного импорта.
- "./math.js" — путь к файлу.
- ./ означает, что файл находится относительно текущего файла.
Можно импортировать только нужное:
import { sum } from "./math.js";


Можно переименовать импортируемое значение:
import { sum as add } from "./math.js";

console.log(add(5, 10));


А теперь импорт default:

greet.js:
export default function greet() {
    console.log("Hello!");
}


main.js:
import greet from "./greet.js";

greet();


У default нет обязательного имени при импорте — ты можешь назвать импортированное значение самостоятельно.

Например:
import sayHi from "./greet.js";


Это тоже работает.
4. Как использовать модули в браузере?
Есть важный нюанс: обычный HTML-файл не всегда автоматически воспринимает JavaScript как модуль.

В index.html нужно написать:
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>My Project</title>
</head>
<body>

    <h1>Мой проект</h1>

    <script type="module" src="./main.js"></script>
</body>
</html>


Вот эта часть особенно важна:
<script type="module" src="./main.js"></script>


type="module" сообщает браузеру, что файл использует систему модулей JavaScript.

Модули в браузере загружаются с использованием правил безопасности, поэтому HTML лучше запускать через локальный сервер, например через расширение Live Server в VS Code, а не просто открывать файл двойным щелчком.
5. Что такое Node.js?
До сих пор мы использовали JavaScript преимущественно в браузере.

Но JavaScript может работать и вне браузера.

Node.js — это среда выполнения JavaScript, позволяющая запускать JS-код на компьютере или сервере.

Например, можно создать файл hello.js:
console.log("Hello from Node.js!");


И запустить его в терминале:
node hello.js


Результат:
Hello from Node.js!


Ты уже устанавливал Node.js, поэтому дополнительно устанавливать его сегодня не нужно.

В терминале VS Code можно проверить версию:
node -v


6. Что такое npm?
npm — менеджер пакетов для JavaScript.

Он помогает:
- устанавливать готовые библиотеки;
- управлять зависимостями проекта;
- запускать команды проекта;
- хранить информацию о проекте.
Например, вместо того чтобы самостоятельно писать сложную функциональность, можно установить готовую библиотеку через npm.

Команда установки пакета:
npm install название-пакета


В твоём PowerShell, если команда npm всё ещё блокируется политикой выполнения, используй:
npm.cmd install название-пакета


Что такое package.json?
Это основной файл с информацией о JavaScript-проекте.

Создать его можно командой:
npm init -y


После этого появится package.json.

Пример содержимого:
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My first project",
  "main": "main.js",
  "scripts": {
    "start": "node main.js"
  },
  "dependencies": {}
}


Разберём важные поля:
Поле	Назначение
name	Название проекта
version	Версия проекта
description	Описание
main	Основной файл пакета
scripts	Команды проекта
dependencies	Установленные зависимости

Например, здесь:
"scripts": {
    "start": "node main.js"
}


Мы создали команду start.

Запустить её можно так:
npm run start


А если npm заблокирован в PowerShell:
npm.cmd run start


7. Зависимости и папка node_modules
Когда устанавливаешь библиотеку, npm обычно создаёт:
my-project/
│
├── node_modules/
├── package.json
├── package-lock.json
└── main.js


Что это значит?
- node_modules — папка с установленными пакетами и их зависимостями.
- package.json — описание проекта и список зависимостей.
- package-lock.json — фиксирует конкретные версии установленных пакетов и дерево зависимостей.
Важный момент: обычно папку node_modules не отправляют в Git вместе с проектом. Другой разработчик может восстановить зависимости командой:
npm install


npm прочитает package.json и package-lock.json и установит необходимые пакеты.

Практика
Сегодня все задания выдаю сразу, как и договаривались. Сначала теория закрепляется вопросами, затем практика, а в конце — мини-проект.
Часть 1. Контрольные вопросы
Ответь своими словами, не обязательно дословно повторять теорию.
1. Для чего нужны JavaScript-модули?
2. Чем export отличается от import?
3. В чём разница между именованным экспортом и default export?
4. Можно ли сделать два default export в одном файле?
5. Для чего нужен type="module" в HTML?
6. Что такое Node.js?
7. Что такое npm?
8. Для чего нужен package.json?
9. Что хранится в node_modules?
10. Зачем нужен package-lock.json?
Часть 2. Практические задания
Задание 1. Именованный экспорт

Создай файл calculator.js.

В нём:
- экспортируй функцию sum(a, b);
- экспортируй функцию subtract(a, b);
- экспортируй переменную multiplier, равную 2.
В файле main.js импортируй все три значения и выведи результаты в консоль.

Задание 2. Default export

Создай файл user.js.

В нём создай объект:
{
    name: "Alex",
    age: 25,
    city: "London"
}


Экспортируй этот объект через default export.

В main.js импортируй объект и выведи имя, возраст и город.

Задание 3. Переименование

Есть файл numbers.js:
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}


Импортируй обе функции, но переименуй:
- multiply → mult;
- divide → div.
Вызови обе функции.

Задание 4. Node.js

Создай файл info.js:
const name = "Alex";
const age = 25;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);


Запусти его через терминал командой:
node info.js


Напиши, что вывел терминал.

Задание 5. npm

В отдельной папке создай небольшой проект.
1. Открой папку в VS Code.
2. Открой терминал.
3. Выполни npm.cmd init -y (или npm init -y, если команда работает).
4. Посмотри созданный package.json.
5. Добавь в scripts команду:
"start": "node main.js"


6. Создай main.js с console.log("My first npm project!");.
7. Запусти проект через npm.cmd run start.
Покажи содержимое package.json после изменений и результат запуска.
Часть 3. Задача на понимание
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
1. Почему multiply импортируется без фигурных скобок?
2. Почему sum импортируется с фигурными скобками?
3. Что выведет программа?
Часть 4. Мини-проект — калькулятор из модулей
Теперь соберём небольшой проект, используя всё сегодняшнее.

Структура:
calculator-project/
│
├── index.html
├── main.js
└── calculator.js


Файл calculator.js

Создай и экспортируй четыре функции:
- add(a, b) — сложение;
- subtract(a, b) — вычитание;
- multiply(a, b) — умножение;
- divide(a, b) — деление.
Для деления на ноль предусмотрите понятную обработку: например, возвращайте строку "Нельзя делить на ноль".

Файл main.js
1. Импортируй все четыре функции.
2. Создай две переменные с числами.
3. Выведи результаты всех четырёх операций в консоль.
4. Проверь деление на ноль.
Файл index.html

Подключи main.js через script type="module".

Открой проект через Live Server и проверь результат в консоли браузера.








note.com



Что прислать на проверку
Присылай ответы на контрольные вопросы и решения заданий. Мини-проект тоже приложи целиком — все три файла.

Я проверю:
- правильность импортов и экспортов;
- структуру проекта;
- работу функций;
- запуск через Node.js и npm;
- понимание того, как связаны между собой модули.
На сегодня материала достаточно. Не торопись: особенно внимательно разберись с разницей между именованным и стандартным экспортом — это основа модульной системы JavaScript. 💪