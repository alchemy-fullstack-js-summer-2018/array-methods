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

module.exports = {
    map,
    filter,
    findIndex
};