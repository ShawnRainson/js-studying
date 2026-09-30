//Задание 1 — создание объекта

let user = {
    name: "Alex",
    age: 25,
    city: "London",
    isAdmin: false
};

console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.isAdmin);

//Задание 2 — изменение объекта
user.age = 26;
user.city = "Paris";
user["job"] = "Developer";
delete user.isAdmin;
console.log(user);

//Задание 3 — динамический доступ 🔥

let property = "city";
console.log(user[property]);
property = "name";
console.log(user[property]);

//Задание 4 — вложенный объект

let userNew = {
    name: "Alex",
    age: 25,
    address: {
        city: "London",
        street: "Baker street"
    }
};

console.log(userNew.address.city);
console.log(userNew.address.street);
userNew.address.city = "Paris";
console.log(userNew);

//Задание 5 — массив объектов
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

for(let user of users) {
    console.log(`${user.name} - ${user.age}`);
};

//Задание 6 — Object.keys, values, entries

let product = {
    name: "Laptop",
    price: 1000,
    brand: "Lenovo"
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

//Задание 7 — работа с Object.entries() 🔥

let userData = {
    name: "Alex",
    age: 25,
    city: "London"
};

for(let [key, value] of Object.entries(userData)) {
    console.log(`${key}: ${value}`);
};

//🥋 Задание 8 — ссылки на объекты

let userNewData = {
    name: "Alex",
    age: 25
};

let copy = userNewData;

copy.age = 30;

console.log(userNewData); // 30
console.log(copy); // 30

let realCopy = { ...userNewData };
realCopy.age = 32;

console.log(userNewData);
console.log(realCopy);

//🥋 Финальное задание — мини-система пользователей
let usersData = [
    {
        name: "Alex",
        age: 25,
        city: "London",
        isAdmin: true
    },
    {
        name: "John",
        age: 17,
        city: "Paris"
    },
    {
        name: "Anna",
        age: 30,
        city: "Berlin",
        isAdmin: false
    }
];

function printAdult(users) {
    for(let user of users) {
        if (user.age >= 18) {
            console.log(`${user.name} - ${user.age} - ${user.city} - ${user.isAdmin}`);
        }
    }
};

printAdult(usersData);