const apiUrl = 'http://localhost:3000/users';

const main = document.getElementById("main")

const get = fetch(apiUrl,{method:'GET'})
get.then(
    result => {
        return result.json()
    }
).then(
    users => {
        const names = users.map(person => person.name).join("\n");

        main.innerHTML = names
    }
)
