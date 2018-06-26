
function map(arr, callback) {
    let returnedArray = [];
    for(let i = 0; i < arr.length; i++) {
        returnedArray.push(callback(arr[i]));   
    }
    return returnedArray;
}
function every(arr, callback) {
    let returnedArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 49) {
            returnedArray.push(arr[i]);}
        callback(returnedArray[i]);
    }
    return returnedArray;
}
function index(arr, callback) {
    let returnedArray = [];
    let j = 0;
    for(let j = 0; j < arr.length; j++) {
        (arr[j] >= 150); 
        callback(returnedArray[j]);
    }
    return returnedArray[j];
}

function filter(arr, callback) {
    let returnedArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            returnedArray.push(arr[i]);
        }
    }
    return returnedArray;
}
module.exports = {
    map,
    every,
    index,
    filter
};