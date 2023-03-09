const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    isAstronaut: false,
    },
    ];

    function filterByField(users, profession) {
        
        const newArr = users.filter((user) => user[profession])
        return newArr
    }
    
    console.log(filterByField(users, "isAstronaut")) 