Вопрос 1. Что такое this в JavaScript? - метод указывающий на объект

Вопрос 2. На какой объект указывает this при вызове user.sayHello(), если sayHello — обычный метод? - user

Вопрос 3. Почему стрелочная функция внутри объекта не получает this от самого объекта? - потому-что стрелочные используют внешний this

Вопрос 4. Что выведет код?
const user = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const anotherUser = {
    name: "Anna",
    sayName: user.sayName
};

anotherUser.sayName(); - Anna


Вопрос 5. Что выведет код в строгом режиме?
"use strict";

function test() {
    console.log(this);
}

test(); - undefined


Вопрос 6. Чем call() отличается от apply()? - в call() параметры передаются через запятую, а в apply() массивом

Вопрос 7. Чем bind() отличается от call()? - bind() сохраняет значение this и позволяет вызвать функцию в любое другое время

Вопрос 8. Почему этот код может не вывести "Alex"?
const user = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const fn = user.sayName;
fn(); - потому-что здесь нет bind()

Задание 8 — закрепление

const user1 = {
    name: "Alex",

    sayName() {
        console.log(this.name);
    }
};

const user2 = {
    name: "Anna"
};

user1.sayName(); - Alex

user1.sayName.call(user2); - Anna

const fn = user1.sayName.bind(user2);

fn(); - Anna