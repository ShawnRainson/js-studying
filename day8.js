//Задание 1 — метод объекта
const person = {
    name: "Alex",
    age: 25,

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.introduce();

//Задание 2 — изменение свойства

const counter = {
    count: 0,

    increase() {
        this.count++;
    },

    decrease() {
        this.count--;
    }
};

counter.increase();
counter.increase();
counter.increase();
counter.decrease();

console.log(counter.count);

//Задание 3 — разные объекты, один метод

const user1 = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Anna",
    sayName: user1.sayName
};

user1.sayName();
user2.sayName();

//Задание 4 — применение apply()

function introduce(city, profession) {
    console.log(`${this.name} lives in ${city} and works as ${profession}`);
};

const newPerson = {
    name: "Mike"
};

introduce.apply(newPerson, ["Prague", "Developer"]);

//Задание 5 — применение bind()

const user = {
    name: "Anna"
};

function sayHello() {
    console.log(`Hello, ${this.name}!`);
};

helloAnna = sayHello.bind(user);

helloAnna();
helloAnna();

//Задание 6 — обычная или стрелочная?

const userOther = {
    name: "Alex",

    sayHi() {
        const sayHello = () => {
            console.log(`Hello ${this.name}`);
        };

        sayHello();
    }
};

userOther.sayHi();

//Задание 7 — потеря контекста

const newUser = {
    name: "Alex"
};

function sayName() {
        console.log(this.name);
    };

fn = sayName.bind(newUser);

fn();

