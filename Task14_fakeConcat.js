
function fakeConcat(array1, array2) {

    const array3 = [...array1, ...array2]
    return array3
}
const array1 = [1, 2, 3]
const array2 = [3, 4, 5]
const array3 = fakeConcat(array1,array2)

console.log(array3)