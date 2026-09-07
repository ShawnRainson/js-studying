//🛠 Задание 1 — найди ошибку

let age = "25";

if (Number(age) === 25) {
    console.log("Вам 25 лет");
}

//🛠 Задание 2 — исправь функцию

function add(a, b) {
    return Number(a) + Number(b);
}

let result = add("10", "20");
console.log(result);

//🛠 Задание 3 — чуть сложнее

function isAdult(age) {
    if (Number(age) >= 18) {
        return true;
    } else if (Number(age) < 18) {
        return false;
    }
}

let posRes = isAdult("25");
let negRes = isAdult("15");
console.log(posRes);
console.log(negRes);

