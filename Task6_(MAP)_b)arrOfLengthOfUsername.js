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

    function getUsernameLengths(users = []) {
        let newArr = []
        newArr = users.map((user) => user.username.length)
        return newArr
    }

    console.log(getUsernameLengths(users)); // [12, 13]