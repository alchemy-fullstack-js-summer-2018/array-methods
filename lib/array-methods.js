function map(arr, callback) {
    let mapped = [];
    for(let i in arr){
        mapped.push(callback(arr[i]));
    }
    return mapped;
}

module.exports = {
    map
};