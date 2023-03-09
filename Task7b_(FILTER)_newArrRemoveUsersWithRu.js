
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];

function filterUsers(users) {
    const newArr = users.filter((element) => element.lang !== "ru")
    return newArr
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]