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
        if(callback(numbers[i])){
        newNumbers.push(numbers[i])
        }
    }  

    return newNumbers;
}

function findIndex(products, callback) {
    
    for(let i = 0; i < products.length; i++) {
        if(callback(products[i])){
        return i;
        }
    }
    return -1;
}

function reduce(values, callback){
    for(let i =0; i < values.length; i++){

    }

}

module.exports = {
    map,
    filter,
    findIndex,
    reduce,
};