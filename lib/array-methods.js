

function mapFunction(arr, callback) {
    var items = new Array;
    for(let i = 0; i < arr.length; i++) {
        items[i] = callback(arr[i]);
    }
    return items;
}

function filterFunction(arr, callback) {
    var items = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            items.push(arr[i]);
        }
    }
    return items;
}

function indexOfFunction(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

function reduceFunction(arr, callback, initialValue) {
    var sum = 0;
    if(!initialValue) {
        for(let i = 0; i < arr.length; i++) {
            sum += callback(0, arr[i]);
        }
        return sum;
    }
    for(let i = 0; i < arr.length; i++) {
        sum += callback(0, arr[i]);
    }
    return sum + initialValue;
}


module.exports = {
    mapFunction,
    filterFunction,
    indexOfFunction,
    reduceFunction
};