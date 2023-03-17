function fakeFilter(array = [], cb = () => {}) {
    let newArr = []
    for(let idx = 0; idx < array.length; idx++) {
        if(cb(array[idx])) {
        const currentItem = array[idx]
        newArr.push(currentItem) 
        }
    }



    return newArr
}

console.log(fakeFilter([4, 5, 8, false], (item) => Number.isFinite(item)))