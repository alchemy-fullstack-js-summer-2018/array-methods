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

function myReduce(arr, callback, initialValue) {
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

function myEvery(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            if(!callback(arr[i])) {
                return -1;
            }
        }
        return true;
    }
}

module.exports = {
    myMap,
    myFilter,
    myFindIndex,
    myReduce,
    myEvery
};