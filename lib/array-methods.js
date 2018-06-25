
function map(arr1, callback) {
    const arr2 = [];
    for(let i =0; i < arr1.length; i++) {
        arr2.push(callback(arr1[i])); 
    }
    return arr2;
}
module.exports = {
    map
};