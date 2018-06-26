function map(array, callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

function filter(numbers, callback){
    const newNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        newNumbers.push(callback(numbers[i]));
    }
    return newNumbers;
}
module.exports = {
    map,
    filter,
};