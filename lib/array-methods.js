function map(arr, callback) {
    let newArray = [];
    for(let i in arr) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

function filter(arr, callback) {
    let newArray = [];
    for(let i in arr) {
        if(callback(arr[i])) newArray.push(arr[i]);
    }
    return newArray;
}

function findIndex(arr, callback) {
    for(let i in arr) {
        if(callback(arr[i])) return i;
    }
    return -1;
}

function reduce(arr, callback) {
    let reduced = 0;
    for(let i in arr) {
        reduced = callback(reduced, arr[i]);
    }
    return reduced;
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce
};