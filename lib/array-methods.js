function myMap(arr, callback) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i]);  
    }
    return newArray;
}

function myFilter(arr, callback) {
    let newArray = [];
    for(let i of arr) {
        if(callback(i)) newArray.push(i);
    }
    return newArray;
}

function myFindIndex(arr, callback) {
    for(let i in arr) if(callback(arr[i])) return i;
    return -1;

}

module.exports = {
    myMap,
    myFilter,
    myFindIndex
};