const assert = require('assert');
const { map, filter, findIndex, reduce, every } = require('../lib/array-methods');

describe('array methods', () => {

    it('Map', () => {
        const arr1 = [1,2,3];
        const arr2 = map(arr1, (item) => {
            return item + 1;
        });
        assert.deepEqual(arr2, [2,3,4]);     
    });

    it('Filter', () => {
        const arr1 = [2, 5, 9];
        const arr2 = filter(arr1, (item) => {
            return item >= 5;
        });
        assert.deepEqual(arr2, [5,9]);
    });

    it('FindIndex', () => {
        const arr1 = [1, 4, 6, 7];
        const index = findIndex(arr1, (item) => {
            if(item % 2 === 0) {
                return item;
            }
        });
        assert.equal(index, 1);
    });
 
    it('Reduce', () => {
        const arr = [1,3,5,7];
        const reducedValue = reduce(arr, (accumulator, currentValue) => { 
            return accumulator + currentValue;
        });
        assert.equal(reducedValue, 16);
    }); 
    
    it('Every', () => {
        const arr = [2,4,6,8];
        let result = every(arr, (item) => item % 2 === 0);
        assert.equal(result, true);
    });
});