const assert = require('assert');
const { map, filter, findIndex } = require('../lib/arrays');


describe('array methods', () => {
    it('Map: Creates new array', () => {
        const array = [2, 4, 6]; 
        const newArray = map(array, (item) => { return item + 1;});
        assert.deepEqual(newArray, [3, 5, 7]);
    });

    it('Filter: Selecting specific items from an array', () => {
        const numbers = [1, 4, 8];
        const newNumbers = filter(numbers, (item) => {return item > 3;})
        assert.deepEqual(newNumbers, [4, 8]);
    });

    it('findIndex: Retrieves index value of a given item/s', () => {
        const products = [1, 2, 3, 4];
        const productIndex = findIndex(products, (item) => {return item})
        assert.deepEqual(productIndex, [0]);
    });

});