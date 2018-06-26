function map(arr, callback) {
    let newArr = arr.slice();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === undefined) continue;
        newArr.splice(i, 1, callback(arr[i]));
    }
    return newArr;
}

function filter(arr, callback) {
    const newArr = [];
    for(let i of arr) {
        if(callback(i)) newArr.push(i);
    }
    return newArr;
}

function findIndex(arr, callback) {
    for(let i in arr) if(callback(arr[i])) return i;
    return -1;
}

function reduce(arr, callback, initialValue) {
    if(arr.length === 0 && initialValue === undefined) throw TypeError;
    let accumulator, i;
    switch(initialValue) {
        case 0:
            accumulator = 0;
            i = 0;
            break;
        case undefined:
            accumulator = arr[0];
            i = 1;
            break;
        default:
            accumulator = initialValue;
            i = 0;
            break;
    }
    for(; i < arr.length; i++) {
        if(arr[i] === undefined) continue;
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

function every(arr, callback) {
    if(arr.length === 0) return true;
    for(let i of arr) {
        if(!callback(i)) return false;
    }
    return true;
}

function forEach(arr, callback) {
    for(let i of arr) callback(i);
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every,
    forEach
};