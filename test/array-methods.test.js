const assert = require('assert');
const aMeth = require('../lib/array-methods');
const myMap = aMeth.myMap;
const myFilter = aMeth.myFilter;
const myFindIndex = aMeth.myFindIndex;
// const myReduce = aMeth.myReduce;
// const myEvery = aMeth.myEvery;

describe('array methods', () => {
    describe('map function', () => {
        const numbers = [1, 2, 3];
        const result = myMap(numbers, x => x + 1);
        it('is equal length', () => {
            assert.equal(numbers.length, result.length);  
        });
        it('copy of array with method applied', () => {
            assert.deepEqual([2, 3, 4], result);      
        });
    });
    describe('filter function', () => {
        it('value higher than 2', () => {
            const numbers = [1, 2, 3];
            const result = myFilter(numbers, x => x > 2);
            assert.deepEqual(result, [3]);    
        });
    });
    describe('find index', () => {
        it('find index of 2 which is 1', () => {
            const numbers = [1, 2, 3];
            const result = myFindIndex(numbers, x => x === 2);
            assert.equal(result, 1);
        });
        it('return -1 if nothing found', () => {
            const numbers = [1, 2, 3];
            const result = myFindIndex(numbers, x => x > 3);
            assert.deepEqual(result, -1);
        });
    });
});