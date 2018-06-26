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
        if(callback(i)) {
            newArr.push(i);
        }
    }
    return newArr;
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