const button = document.querySelector("#loadUsers");
const list = document.querySelector("#userList");
const statusProcess = document.querySelector("#status");

async function loadUsers() {
    statusProcess.textContent = "Loading...";
    list.textContent = "";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok) {
            throw new Error(response.status);
        };

        const data = await response.json();

        for(let user of data) {
            const el = document.createElement("li");
            el.textContent = `Name: ${user.name}, Email: ${user.email}`;
            list.append(el);
        };
        statusProcess.textContent = "Users loaded successfully!";
    } catch (error) {
        statusProcess.textContent = error;
    };
};

button.addEventListener("click", loadUsers);