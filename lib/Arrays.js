function map(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr; 
}
function filter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]); 
        } 
    }
    return newArr;
}
function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return i;           
        }
    }
    return -1;
}
function reduce(arr, callback, initialValue) {
    let numValue = 0;
    if(!initialValue) {
        initialValue = 0;
    }
    for(let i = 0; i < arr.length; i++) {
        numValue = callback(arr[i], numValue);
    }
    return numValue;

}
function every(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i])) {
            return -1;
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