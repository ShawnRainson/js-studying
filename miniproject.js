//🏆 Финальный мини-проект — обработчик профиля пользователя
const user1 = {
    name: "Alex",
    age: 25,
    address: { city: "Prague" },
    skills: ["JavaScript", "HTML"]
};

const user2 = {
    name: "Anna",
    age: 17,
    skills: []
};

const user3 = {
    name: "Mike",
    age: 30
};

function createUserSummary(user) {
    const newUserObject = {};
    const { name, age, address, skills: firstSkill} = user;
    newUserObject.name = name;
    newUserObject.age = age;
    newUserObject.city = address?.city ?? "Unknown";
    newUserObject.firstSkill = firstSkill?.[0] ?? "No skills";
    if (newUserObject.age >= 18) {
        newUserObject.isAdult = true;
    } else {
        newUserObject.isAdult = false;
    };
    return newUserObject;
};

console.log(createUserSummary(user1));
console.log(createUserSummary(user2));
console.log(createUserSummary(user3));