const assert = require('assert');
const { mapFunction } = require('../lib/array-methods');

describe('Array Methods', () => {

    describe('.map()', () => {

        it('Returns new array mapped from original array', () => {
            const arr = [1, 3, 5];
            const result = mapFunction(arr, (item) => item + 10);
            assert.deepEqual(result, [11, 13, 15]);
        });
    });
});