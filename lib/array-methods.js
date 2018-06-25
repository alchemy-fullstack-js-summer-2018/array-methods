
function map(arr) {
    let newNum = [];
    
    for(let i = 0; i < arr.length; i++) {
        newNum.push(arr[i]);
    }
    return newNum;
}

module.exports = {
    map
};