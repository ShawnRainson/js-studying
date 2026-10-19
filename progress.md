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