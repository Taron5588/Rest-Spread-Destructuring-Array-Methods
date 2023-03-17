function fakeMap(array = [], cb = ()=> {}) {
    let newArr = []
    for (let idx = 0; idx < array.length; idx++) {
        const currentItem = cb(array[idx], idx, array)
        newArr.push(currentItem)
    }
    
    return newArr
}

console.log(fakeMap(['true', 1, 'false', 0], (item, i) => item + 7*i))