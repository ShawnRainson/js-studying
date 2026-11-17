//Финальный мини-проект — имитация загрузки пользователя
const users = [
    { id: 1, name: "Alex", age: 25 },
    { id: 2, name: "Anna", age: 22 },
    { id: 3, name: "Mike", age: 30 }
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let user of users) {
                if(user.id == id) {
                    resolve(user);
                } else {
                    reject("User not found");
                };
            };
        }, 2000);
    });
};

async function showUser(id) {
    try {
        const user = await getUser(id);
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        console.log("User finding is finished.");
    };
};

showUser(1);
showUser(10);