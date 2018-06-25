function map(arr, callback) {
    let newArray = [];
    for(let i in arr) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

module.exports = {
    map
};