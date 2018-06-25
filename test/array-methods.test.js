const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {

    describe('map', () => {
        let testers = [1, 3, 5, 6];

        it('returns a new array the same length as given array', () => {
            const numbers = testers;
            const result = map(numbers, n => n);
            assert.equal(result.length, numbers.length);
        });

        it('returns a new array with changed values', () => {
            const numbers = testers;
            const result = map(numbers, n => (n + 1));
            assert.deepEqual(result, [2, 4, 6, 7]);
        });
        
    });
});