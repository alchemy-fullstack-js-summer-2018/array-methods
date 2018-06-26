

function mapFunction(arr, callback) {
    var items = [];
    for(let i = 0; i < arr.length; i++) {
        items.push(callback(arr[i]));
    }
    return items;
}

function filterFunction(arr, callback) {
    var items = [];
}


module.exports = {
    mapFunction,
    filterFunction
};