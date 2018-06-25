const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {

    describe('map', () => {
        it('it creates a new array', () => {
            const arr1 = [1,2,3];
            const arr2 = map(arr1, (item) => {
                return item + 1;
            });
            assert.equal(arr2, [2,3,4]);     
        });
    });
});