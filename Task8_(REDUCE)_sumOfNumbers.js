const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

function sumNum(arr) {
    let newArr = arr.filter((number) => number > 18)
    //console.log(newArr)
    let sum = newArr.reduce((acc, cur)=> acc + cur)
    return sum

}

console.log(sumNum(arr))//???maybe this is mistake..22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347???