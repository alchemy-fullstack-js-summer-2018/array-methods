function mapping(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

function filtering(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function findingIndex(arr, callback) {
    let index;
    let holes = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === undefined) { holes++; }
        if(callback(arr[i])) {
            index = i;
        }
        else index = -1;
    }
    return index - holes;
}

module.exports = {
    mapping, filtering, findingIndex
};