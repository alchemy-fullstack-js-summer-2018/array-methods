function map(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        newArray.push(array[i] + 1);
    }
    return newArray;
}

module.exports = {
    map,
};