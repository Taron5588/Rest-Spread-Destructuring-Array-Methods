function fakeJoin(array, symbol = ",") {
    let str = ""
    for(let idx = 0; idx < array.length; idx++) { {
            str +=array[idx]
            if(idx < array.length - 1) {
                str += symbol
            }
        }
    }

    return str
}

array = [1, 2, 3, 4, 5]

const string = fakeJoin(array, ",")

console.log(string)