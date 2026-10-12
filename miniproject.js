//🏆 Финальный мини-проект — обработчик профиля пользователя
const user = {
    name: "Alex",
    age: 25,
    address: {
        city: "Prague",
        street: "Main Street"
    },
    skills: ["JavaScript", "HTML", "CSS"]
};

const user2 = {
    name: "Alex",
    age: 25,
    address: {
        street: "Main Street"
    },
    skills: []
};

function createUserSummary(user) {
    const newUserObject = {};
    const { name, age, address, skills: FirstSkill} = user;
    newUserObject.name = name;
    newUserObject.age = age;
    newUserObject.city = address.city ?? "Unknown";
    newUserObject.FirstSkill = FirstSkill[0] ?? "No skills";
    if (newUserObject.age >= 18) {
        newUserObject.isAdult = true;
    } else {
        newUserObject.isAdult = false;
    };
    return newUserObject;
};

console.log(createUserSummary(user));
console.log(createUserSummary(user2));