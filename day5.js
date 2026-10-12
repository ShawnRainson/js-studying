//Задание 1 — шаблонная строка
let name = "Alex";
let age = 25;
let city = "London";
console.log(`${name} is ${age} y.o. and lives in ${city}`);

//Задание 2 — деструктуризация массива
const colors = ["red", "green", "blue", "yellow"];
const [FirstColor, , ThirdColor] = colors;
console.log(FirstColor);
console.log(ThirdColor);

//Задание 3 — деструктуризация объекта
const user = {
    nameU: "Anna",
    ageU: 28,
    cityU: "Prague"
};

const { nameU, cityU } = user;
const { ageU: userAge } = user;
console.log(nameU);
console.log(cityU);
console.log(userAge);

//Задание 4 — функция с деструктуризацией
function printProduct({name, price}) {
    console.log(`${name} cost ${price}`);
};

printProduct({name: "Laptop", price: 1000});

//Задание 5 — копирование и объединение массивов
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
const copyComb = [...combined];
copyComb.push(7);
console.log(combined);
console.log(copyComb);

//Задание 6 — копирование объекта
const userUU = {
    nameUU: "Alex",
    ageUU: 25,
    cityUU: "London"
};

const updetedUser = { ...userUU, ageUU: 26, job: "Developer"};
console.log(updetedUser);

//Задание 7 — optional chaining и ??
const userTest1 = {
    name1: "Alex",
    address1: {
        city1: "Prague"
    }
};

const userTest2 = {
    name2: "Alex"
};

console.log(userTest1.address1.city1 ?? "Unknown");
console.log(userTest2.address2 ?? "Unknown");

//Задание 8 — rest и spread
function calculateTotal(...prices) {
    let sum = 0;
    for(let price of prices) {
        sum += price;
    };
    return sum;
};

const prices = [10, 20, 30];
console.log(calculateTotal(...prices));