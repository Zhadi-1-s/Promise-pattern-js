const apiUrl = 'http://localhost:3000/users';

const main = document.getElementById("main")

const get = fetch(apiUrl,{method:'GET'})

get.then(respone => respone.json())
.then(users => {
    const ul = document.getElementById("main");
    users.foreach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${user.id}, Name: ${user.name}`;
        ul.appendChild(listItem);
    });
})
.catch(error => {
    console.error("Error fetching data:", error)
})