function fakeSome(array = [], cb = () => {}) {

    for(let idx = 0; idx < array.length; idx++) {
        if(cb(array[idx])) {
            return true
        }
    }

    return false
}

isValid = fakeSome(["1,1", 1, '', -47], (element) => isNaN(element))
console.log(isValid)