const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
    ];
function getAverageAge(users) {
    const [{age : first}, {age : second}] = users
    return (first + second)/2
    // const getAverageAge = users.filter((user) => user.age)
    // console.log(getAverageAge)
    //const sumAverageAge = users.reduce((acc, cur) => (acc + cur)/2  )
}
    console.log(getAverageAge(users)); // 55