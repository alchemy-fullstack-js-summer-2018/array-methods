function map(arr, callback) {
    let returnedArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i] = returnedArray[i])) return true;
    }
    return false;
}

module.exports = {
    map,

};