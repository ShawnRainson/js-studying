Вопрос 1

Что выведет?

let user = {
    name: "Alex",
    age: 25
};

console.log(user.name); - Alex
console.log(user["age"]); - 25

И объясни разницу между двумя способами доступа.
Ответ: через . идёт прямое обращение к ключу, а через [] можно использовать значение переменной

Вопрос 2

Что выведет?

let user = {
    name: "Alex"
};

let property = "name";

console.log(user[property]); - Alex
console.log(user.property); - Ошибку, так как такого ключа нет

Почему результаты разные? - Объяснил в первом вопросе

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

Какой объект останется? - с городом London и возрастом 26

Вопрос 4

Что выведет?

let user = {
    name: "Alex",
    address: {
        city: "London",
        street: "Baker Street"
    }
};

console.log(user.address.city); - London

Почему здесь нужны две точки? - Потому что здесь вложенный объект

Вопрос 5

Что вернут:

let user = {
    name: "Alex",
    age: 25,
    city: "London"
};

console.log(Object.keys(user)); - name, age, city
console.log(Object.values(user)); - Alex, 25, London
console.log(Object.entries(user)); - name Alex, age 25, city London

Не обязательно воспроизводить формат вывода идеально — главное объяснить содержимое.

Вопрос 6 — ловушка 🔥

Что выведется?

let user = {
    name: "Alex"
};

let copy = user;

copy.name = "John";

console.log(user.name); - John
console.log(copy.name); - John

Почему? - ссылка на один объект

Вопрос 7 — const

Что произойдёт?

const user = {
    name: "Alex"
};

user.name = "John";

console.log(user.name); - John

Будет ошибка или "John"?

Объясни почему. - Потому что const не запрещает изменять значения объекта

