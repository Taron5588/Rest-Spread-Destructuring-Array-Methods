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
      
    function getUserNames(users = []) {
        const getCb = (user) => user.username
        const newArr = users.map(getCb);

        return newArr
    }
    console.log(getUserNames())