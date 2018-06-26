const assert = require('assert');
const { map, filter, findIndex, reduce, every } = require('../lib/arrays');


describe('array methods', () => {
    it('Map: Creates new array', () => {
        const array = [2, 4, 6]; 
        const newArray = map(array, (item) => { return item + 1;});
        assert.deepEqual(newArray, [3, 5, 7]);
    });

    it('Filter: Selecting specific items from an array', () => {
        const numbers = [1, 4, 8];
        const newNumbers = filter(numbers, (item) => {return item > 3;});
        assert.deepEqual(newNumbers, [4, 8]);
    });

    it('findIndex: Retrieves index of a given item', () => {
        const products = [1, 25, 60, 14];
        const productIndex = findIndex(products, (item) => {return item > 50;});
        assert.equal(productIndex, 2);
    });

    it('Reduce: reduces an array to a single value', () => {
        const values = [5, 10, 15];
        const totalValue = reduce(values, (accumulator, item ) => {return accumulator + item;});
        assert.equal(totalValue, 30);
    });

    // it('Every: tests whether all elements in the array passes the test', () => {
    //     const digits = [5, 6, 7, 8];
    //     const smallDigits = every(digits, (item) => {return item < 10;})
    //     assert.equal(smallDigits, true);
    // });

});