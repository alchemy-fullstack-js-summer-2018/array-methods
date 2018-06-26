function map(arr, callback) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        const mapped = callback(arr[i]);
        result.push(mapped);

    }

    return result;
}

function filter(array, callback) {
    const newArr = [];

    for(var i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true) {
            return i;
        } 
    }
    return 2;
}

module.exports = {
    map,
    filter,
    findIndex
    
};