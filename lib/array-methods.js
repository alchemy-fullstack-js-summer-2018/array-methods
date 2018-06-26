

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
    let result;
    if(!initialValue) {
        result = arr[0];
        for(let i = 1; i < arr.length; i++) {
            result = callback(result, arr[i]);
        }
    } else {
        result = initialValue;
        for(let i = 0; i < arr.length; i++) {
            result = callback(result, arr[i]);
        }
    }
    return result;
}

function everyFunction(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === false) return false;
    }
    return true;
}


module.exports = {
    mapFunction,
    filterFunction,
    indexOfFunction,
    reduceFunction,
    everyFunction
};