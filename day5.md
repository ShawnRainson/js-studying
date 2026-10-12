Вопрос 1 — деструктуризация массива
const numbers = [10, 20, 30];

const [a, , c] = numbers;

console.log(a); - 10
console.log(c); - 30


Что выведется и почему?

Вопрос 2 — деструктуризация объекта
const user = {
    name: "Alex",
    age: 25
};

const { name: userName, city = "London" } = user;

console.log(userName); - Alex
console.log(city); - London


Что выведется? Чем name отличается от userName?

Вопрос 3 — spread
const numbers = [1, 2, 3];
const copy = [...numbers];

copy.push(4);

console.log(numbers); - [1, 2, 3]
console.log(copy); - [1, 2, 3, 4]


Почему массивы разные?

Вопрос 4 — порядок spread
const user = {
    name: "Alex",
    age: 25
};

const first = { ...user, age: 30 };
const second = { age: 30, ...user };

console.log(first.age); - 30
console.log(second.age); - 30


Почему результаты различаются?

Вопрос 5 — optional chaining
const user = {
    name: "Alex"
};

console.log(user.address?.city); - undefined


Что выведется? Почему не будет ошибки?

Вопрос 6 — ?? против ||
console.log(0 || 10); - 10
console.log(0 ?? 10); - 0

console.log(false || true); - true
console.log(false ?? true); - false


Предскажи все четыре результата и объясни разницу.

Вопрос 7 — rest
const numbers = [5, 10, 15, 20];

const [first, ...rest] = numbers;

console.log(first); - 5
console.log(rest); - [10, 15, 20]


Что делает ...rest?

Вопрос 8 — параметры функции
function printUser({ name, age }) {
    console.log(`${name}: ${age}`);
}

printUser({ name: "Anna", age: 22 }); - Anna: 22


Что получит функция и что выведет?