
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
module.exports = {
    map,
    every
   
};