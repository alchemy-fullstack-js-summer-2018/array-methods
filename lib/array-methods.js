
function some(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) return true;
    }
    return false;
}

function map(arr, callback) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2[i] = callback(arr[i]);
    }
    return arr2;
}

function filter(arr, callback) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            return i;
        } 
    }
    return -1;
}

function reduce(arr, callback) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = callback(sum, arr[i]);
    }
    return sum;
}
function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) !== true) {
            return false;
        }
    }
    return true;
}


module.exports = {
    some,
    map,
    filter,
    findIndex,
    reduce,
    every
};