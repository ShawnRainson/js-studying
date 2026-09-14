//Задание 1 — базовое

let fruits = ["apple", "banana", "orange"];

fruits.push("kiwi");
fruits.unshift("mango");
fruits.pop();
fruits.shift();
console.log(fruits);

//Задание 2 — поиск

let users = ["Alex", "John", "Mike", "Anna"];

if (users.includes("Mike")) {
    console.log("Майк в списке пользователей.");
} else {
    console.log("Майк не в списке, печалька (((");
}

if (users.includes("Bob")) {
    console.log("Боб в списке пользователей");
} else {
    console.log("Боб не в списке, печалька (((");
}

//Задание 3 — indexOf

console.log(users.indexOf("Anna"));
console.log(users.indexOf("Bob"));

//Задание 4 — slice

let numbers = [10, 20, 30, 40, 50, 60];

let newNumbers = numbers.slice(1, 5);

console.log(numbers);
console.log(newNumbers);

//Задание 5 — splice

let numbers1 = [10, 20, 30, 40, 50];

numbers1.splice(2, 1, 99);
console.log(numbers1);

//Задание 6 — for...of

function printNumbers(numbers) {
    for (let number of numbers) {
        console.log(number);
    };
};

printNumbers([10, 20, 30]);

//Задание 7 — практика посложнее 🔥

function getEvenNumbers(numbers) {
    let evenNums = [];
    for (let num of numbers) {
        if (num % 2 == 0) {
            evenNums.push(num);
        };
    };
    return evenNums;
}

let evenNumbers = getEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers);

//Задание 8 — контроль понимания 🔥🔥

let numbers2 = [1, 2, 3, 4, 5];

let part = numbers2.slice(1, 4);

part.push(100);

numbers2.splice(0, 1);

console.log(numbers2); //[2, 3, 4, 5]
console.log(part);//[2, 3, 4, 100]

//🥋 Финальное задание дня

let shoppingList = [
    "milk",
    "bread",
    "eggs"
];

function shoppingListOperations(shopping) {
    shopping.push("cheese");
    shopping.unshift("apples");
    shopping.splice(3, 1);
    
    if (shopping.includes("bread")) {
        console.log("Bread in list");
    } else {
        console.log("Bread out of list");
    };

    for (let prod of shopping) {
        console.log(prod);
    }

    console.log(shopping);

}

shoppingListOperations(shoppingList);