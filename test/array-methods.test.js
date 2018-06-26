const assert = require('assert');
const { map, filter, findIndex  } = require('../lib/array-methods');

describe('array methods', () => {


    describe('map', () => {
        
        it('transforms an array', () => {
            const arr = [1, 2, 3];
            const mapArray = map(arr, (val) => {
            
                return val + 1;
            });
            assert.deepEqual(mapArray, [2, 3, 4]);
        });
    });

    describe('filter', () => {

        it('returns truthy values in the array', () => {
            const arr = [1, 2, 3];
            const newArr = filter(arr, i => (i > 2));
            assert.deepEqual(newArr, [3]);
        });
    });

    describe('findIndex', () => {
        it('returns the index of the first item that returns truthy', () => {
            const numbers = [1, 2, 3];
            const cats = findIndex(numbers, (a) => a > 2);
            assert.equal(cats, 2);
        });
    });
});