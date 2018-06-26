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
    const productIndex = [];
    for(let i = 0; i < products.length; i++) {
        if(callback(products[i] = 0)){
        productIndex.push(products[i])
        }
    }

    return productIndex;
}

module.exports = {
    map,
    filter,
    findIndex,
};