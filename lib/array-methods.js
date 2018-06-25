


function map(arr, callback) {
    let returnedArray = [];
    for(let i = 0; i < arr.length; i++) {
        returnedArray.push(arr[i]);
        callback(arr[i] === returnedArray[i]);
        console.log('returnedArray = ' + returnedArray);
        console.log('arr = ' + arr);
    }
    return returnedArray;
}



module.exports = {
    map

};