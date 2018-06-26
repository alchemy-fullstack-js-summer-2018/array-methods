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
    let accumulator = initialValue ? initialValue : arr[0];
    let i = initialValue ? 0 : 1;
    for(; i < arr.length; i++) accumulator = callback(accumulator, i);
    return accumulator;
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce
};