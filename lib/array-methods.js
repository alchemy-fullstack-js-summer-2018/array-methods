function map(arr, callback) {
    const result = [];
    for(let i in arr) {
        result.push(callback(arr[i]));
    }
    return result;
}

module.exports = {
    map
};