//Задание 1 — порядок выполнения
console.log("First"); // 1

setTimeout(() => {
    console.log("Second");
}, 2000);//3

console.log("Third"); //2

//Задание 2 — передача callback
function processOrder(callback) {
    console.log("Order received");

    setTimeout(callback, 2000);
};

function resultOrder() {
    console.log("Order completed");
};

processOrder(resultOrder);

//Задание 3 — Promise с успешным результатом
const promise = new Promise((resolve) => {
    resolve("Data loaded");
});

promise.then((resolve) => {
    setTimeout(() => {
        console.log(resolve);
    }, 2000);
});

//Задание 4 — Promise с ошибкой
const promise2 = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

promise2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

//Задание 5 — finally

const promise3 = new Promise((resolve, reject) => {
    resolve("Success!");
    reject("Error!");
});

promise3.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finish!");
});

//Задание 6 — цепочка Promise
Promise.resolve(10).then((number) => {
    return number * 2;
}).then((number) => {
    return number + 5;
}).then((result) => {
    console.log(result);
});

//Задание 7 — async/await
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Alex", age: 25});
        }, 2000);
    });
};

async function showUser() {
    const user = await getUser();

    console.log(user.name);
    console.log(user.age);
};

showUser();

//Задание 8 — обработка ошибок
function getData() {
    return new Promise((resolve, reject) => {
        reject("Failed to load data!");
    });
};

async function loadData() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("Data loading is finished!");
    };
};

loadData();

//Задание 9 — Event Loop
console.log("1"); //1

setTimeout(() => {
    console.log("2");
}, 0);//3

Promise.resolve().then(() => {
    console.log("3");
});//5

console.log("4");// 2

setTimeout(() => {
    console.log("5");
}, 0);//4

Promise.resolve().then(() => {
    console.log("6");
});//6
//Цифрами указал последовательность