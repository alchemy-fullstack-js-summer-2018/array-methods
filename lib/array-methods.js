
function map(arr, callback) {
    let newNum = [];

    for(let i = 0; i < arr.length; i++) {
        newNum[i] = callback(arr[i]);
    }
    return newNum;
}

function filter(arr, callback) {
    let newNum = [];

    for(let i in arr) {
        if(callback(arr[i])) {
            newNum.push(arr[i]);
        }
    }
    return newNum;
}

module.exports = {
    map,
    filter
};