
function onlyNumbers(arr) {
    const newArr = arr.filter((element) => Number.isFinite(element))
    return newArr
}

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]

console.log(onlyNumbers(arr))