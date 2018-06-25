
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

module.exports = {
    some,
    map
};