function map(arr, callback) {
    const newArr = [];
    for(let i in arr) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

module.exports = {
    map
};