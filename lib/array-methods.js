function map(arr, callback) {
    const newArr = [];
    for(let i of arr) {
        newArr.push(callback(i));
    }
    return newArr;
}

function filter(arr, callback) {
    const newArr = [];
    for(let i of arr) {
        if(callback(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}

module.exports = {
    map,
    filter
};