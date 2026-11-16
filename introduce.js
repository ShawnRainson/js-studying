//Финальный мини-проект — система пользователей

const users = [
    { name: "Alex", age: 25, city: "Prague", haveBirthday() {
        this.age++;
    } },
    { name: "Anna", age: 22, city: "Brno", haveBirthday() {
        this.age++;
    } },
    { name: "Mike", age: 30, city: "Ostrava", haveBirthday() {
        this.age++;
    } }
];

function introduce() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} and I am liveing in ${this.city}`);
};

for (let user of users) {
    introduce.call(user);
};

function showWelcome() {
    console.log(`Welcome ${this.name}`);
};

const welcomeAlex =  showWelcome.bind(users[0]);

welcomeAlex();

users[0].haveBirthday();
users[1].haveBirthday();
users[1].haveBirthday();

for (let user of users) {
    console.log(`${user.name}: ${user.age}`);
}
