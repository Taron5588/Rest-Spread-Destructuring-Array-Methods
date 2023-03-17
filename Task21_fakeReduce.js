function fakeReduce(array = [], cb = () => {}, initialValue) {  

    let acc = 0;
    if(typeof initialValue !== 'undefined') {
        acc = initialValue;
        for(let idx = 0; idx < array.length; idx++) {
        acc = cb(acc, array[idx])
        };
    } else {
        acc = array[0];
        for(let idx = 1; idx < array.length; idx++) {
        acc = cb(acc, array[idx])
        };
    }
    
    return acc;
} 

const sumReduce = fakeReduce([1,2,3,4], (accumulyator, currentValue) => (accumulyator + currentValue), 7)

console.log(sumReduce)