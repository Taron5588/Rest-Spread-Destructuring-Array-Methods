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
    return (first + second)/users.length
    //orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    // sum = users.reduce((acc, cur) => (acc.age + cur.age)/users.length)
    // return sum
}

    console.log(getAverageAge(users)); // 55