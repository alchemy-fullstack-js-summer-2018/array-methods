function map(arr, callback) {
    const result = [];
    for(let i in arr) {
        result.push(callback(arr[i]));
    }
    return result;
}

function filter(arr, callback) {
    const result = [];
    for(let i in arr) {
        if(callback(arr[i])) result.push(arr[i]);
    }
    return result;

}

function findIndex(arr, callback) {
    for(let i in arr) {
        if(callback(arr[i])) return i;
    }
    return false;
}

function reduce(arr, callback) {
    let result = 0;
    for(let i in arr) {
        callback(arr[i]);
        result += arr[i];
    }
    return result;
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce
};