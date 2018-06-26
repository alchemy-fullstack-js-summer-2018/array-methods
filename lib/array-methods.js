function map(arr, callback) {
    let mapped = [];
    for(let i in arr){
        mapped[i] = callback(arr[i]);
    }
    return mapped;
}

function filter(arr, callback) {
    let filtered = [];
    for(let i in arr){
        if(callback(arr[i]) === true){
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

function findIndex(arr, callback) {
    for(let i in arr){
        if(arr[i] === undefined){
            continue;
        }
        if(callback(arr[i])){
            return i;
        }
    }
    return -1;
}

function reduce(arr, callback, initialValue){
    let sum = initialValue; 
    let i = 0;
    if(initialValue === undefined){
        sum = arr[0];
        i = 1;
    }
    for(; i < arr.length; i++){
        sum = callback(sum, arr[i]);
    }
    return sum;
}

function every(arr, callback){
    for(let i in arr){
        if(callback(arr[i]) === false){
            return false;
        }
    }
    return true;
}

function forEach(arr, callback){
    for(let i in arr){
        callback(arr[i]);
    }
}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
    every,
    forEach
};