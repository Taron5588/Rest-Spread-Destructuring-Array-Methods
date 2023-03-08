// function parseInt(array) {
//     let newArr = array.map((value) => isFinite(value) ? +value : null)
//     return newArr
// }

// console.log(parseInt(["1", "2", "px", "10"]))
function parseInt(array) {
    let newArr = array.map((value) => isFinite(value) ? (+value) : null)
    return newArr
}

console.log(parseInt(["1", "2", "px", "10"]))