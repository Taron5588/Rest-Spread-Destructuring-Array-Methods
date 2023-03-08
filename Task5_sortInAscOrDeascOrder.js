function sort(array, rule) {
let newArray = []
if (rule === "Deasc") {
newArray = array.sort((a,b) => b - a)
}
else if(rule === "Asc") {
    newArray = array.sort((a,b) => a > b ? 1 : -1)
}
    return newArray
}

res = sort([1, 2, 3], "Deasc")
console.log(res)   //???սրանից կարճ ձև կա, բացի (a - b)-ն ???