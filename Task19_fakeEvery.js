function fakeEvery(array = [], cb = () => {}) {

    for(let idx = 0; idx < array.length; idx++) {

        if(!cb(array[idx], idx, array)) {

            return false
        }
    }
        return true
}

let isValid = fakeEvery([true, 'true', false], (item) => (typeof item) === 'boolean')
console.log(isValid)