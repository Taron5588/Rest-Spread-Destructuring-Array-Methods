function fakeForEach(array, cb) {

    for(let idx = 0; idx < array.length; idx++) {
        console.log(cb(array[idx], idx, array))   
    }
    
}

fakeForEach([1, 2, 3, 4, 5], (item, i, arr) => [item * i].concat(arr))