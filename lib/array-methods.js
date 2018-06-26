

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
        return callback(arr);
    }
}

function reduceFunction(arr, callback) {
    
}


module.exports = {
    mapFunction,
    filterFunction,
    indexOfFunction,
    reduceFunction
};