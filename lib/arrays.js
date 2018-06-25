function map(array, callback) {
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    return newArray;
}

module.exports = {
    map,
};