
function map(arr, callback) {
    let newNum = [];

    for(let i = 0; i < arr.length; i++) {
        newNum[i] = callback(arr[i]);
    }
    return newNum;
}

function filter(arr, callback) {
    let newNum = [];

    for(let i in arr) {
        if(callback(arr[i])) {
            newNum.push(arr[i]);
        }
    }
    return newNum;
}

function findIndex(arr, callback) {
    for(let i in arr) {
        if(arr[i] === null) {
            break;
        }
        else if(callback(arr[i])) {
            return i;
        }
        else {
            return -1;
        }
    }
}

function reduce(arr, callback, initialValue) {
    for(let i in arr) {
        if(!initialValue) {
            initialValue = arr[0];
        }
        else if(arr[i] === null) {
            break;
        }
        else {
            initialValue = callback(initialValue, arr[i]);
        }
    }
    return initialValue;
}

function every(arr, callback) {
    for(let i in arr) {
        if(arr[i] === null) {
            break;
        }
        else if(!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every
};