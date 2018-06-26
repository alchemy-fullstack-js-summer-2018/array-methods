function map(arr, callback) {
    const newArr = [];
    for(let i of arr) {
        newArr.push(callback(i));
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
    if(arr.length === 0 && !initialValue) throw TypeError;
    let accumulator = initialValue  ? initialValue : arr[0];
    for(let i = initialValue ? 0 : 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

function every(arr, callback) {
    if(arr.length === 0) return true;
    for(let i of arr) {
        if(!callback(i)) return false;
        return true;
    }
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every
};