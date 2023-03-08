function sort(array, rule) {
let newArray = []
if (rule === "Deasc") {
newArray = array.sort((a,b) => a > b ? -1 : 1)
}
else if(rule === "Asc") {
    newArray = array.sort((a,b) => a > b ? 1 : -1)
}
    return newArray
}

res = sort([1, 2, 3], "Deasc")
console.log(res)