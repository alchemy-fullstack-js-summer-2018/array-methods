function map(arr) {
    let mapped = [];
    for(let i in arr){
        mapped.push(arr[i]);
    }
    return mapped;
}

module.exports = {
    map
};