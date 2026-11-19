//Задание 1 — JSON
const user = {
    name: "Anna",
    age: 22,
    city: "Prague"
};

const json = JSON.stringify(user);
console.log(json);

const jsObj = JSON.parse(json);
console.log(jsObj.name);
console.log(jsObj.city);

//Задание 2 — первый GET-запрос
fetch("https://jsonplaceholder.typicode.com/users").then(Response => {
    if(!Response.ok) {
        throw new Error(`Error: ${Response.status}`);
    };
    return Response.json();
}).then(data => {
    console.log(data);
    for(let userName of data) {
        console.log(userName.name);
    };
}).catch(error => {
    console.log("Error: ", error);
});


//Задание 3 — GET с async/await
//Задание 4 — обработка HTTP-ошибки
async function getUser(id) {
    try {
        //const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await fetch("https://jsonplaceholder.typicode.com/users/9999");

        if(!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        for(let i of data) {
            if(i.id === id) {
                console.log(`Name: ${i.name}\nEmail: ${i.email}\nCity: ${i.address.city}`);
            };
        };
    } catch (error) {
        console.log("Error status: ", error);
    };    
};

getUser(1);
getUser(2);

//Задание 5 — POST
async function createUser() {
    const newUser = {
        name: "Alex",
        username: "alex_dev",
        email: "alex@example.com"
    };
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        };

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    };
};

createUser();

//Задание 6 — цепочка обработки данных

fetch("https://jsonplaceholder.typicode.com/users").then(Response => {
    if(!Response.ok) {
        throw new Error(`Error: ${Response.status}`);
    };
    return Response.json();
}).then(data => {
    console.log(data);
    for(let j of data) {
        if(j.age >= 30) {
            console.log(`Name: ${j.name}, Age: ${j.age}`);
        };
    };
}).catch(error => {
    console.log("Error: ", error);
});//У меня две претензии к этому заданию
//1 Когда мы проходили массивы (или объекта), мы не рассматривали filter насколько я помню, поэтому я не знаю как его применят
//2 Я конечно написал код, знаю как отфильтровать по возрасту, но загвоздка в том что в данном мне URL у пользователей не указан возраст, поэтому ничего не выводится

//Задание 7 — API + async/await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        };

        const data = await response.json();
        const newData = [];

        for(let n of data) {
            newData.push({name: n.name, email: n.email});
        };

        console.log(newData);

    } catch (error) {
        console.log("Error: ", error);
    };
};

getUsers();