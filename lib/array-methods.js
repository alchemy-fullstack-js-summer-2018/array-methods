
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
            continue;
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
    let sum = 0;

    for(let i in arr) {
        sum += callback(0, arr[i]);
    }
    if(!initialValue) {
        initialValue = 0;
    }
    return sum + initialValue;

}

module.exports = {
    map,
    filter,
    findIndex,
    reduce
};