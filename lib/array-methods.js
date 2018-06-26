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

module.exports = {
    map,
    filter,
    findIndex
};