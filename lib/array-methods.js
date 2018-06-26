
function map(arr1, callback) {
    const arr2 = [];
    for(let i =0; i < arr1.length; i++) {
        arr2.push(callback(arr1[i])); 
    }
    return arr2;
}

function filter(arr1, callback) {
    const arr2 = [];
    for(let i = 0; i < arr1.length; i++) {
        if(callback(arr1[i])) {
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

function findIndex(arr, callback) {
    for(let i=0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return i;
        }
    }
    return -1;
}
function reduce(arr, callback) {
    let result = 0;
    for(let i=0; i < arr.length; i++) {        
        result = callback(result, arr[i]);
    }
    return result;
}

module.exports = {
    map,
    filter,
    findIndex, 
    reduce 
};