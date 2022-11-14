axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        const users = response.data
        console.log(users)

        users.forEach((user, index) => {
            document.getElementById('tbody').innerHTML += `
            <tr>
             <th scope="row">${index + 1}</th>
             <td>${user.name}</td>
             <td>${user.username}</td>
             <td>${user.email}</td>
             <td>${user.address.city}</td>
            </tr>
            `
        });
    })

/* organish uchun */
//api
//asinxron