function map(arr, callback) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];
        newArray.push(callback(item));
    }
    return newArray;
}

module.exports = {
    map
};