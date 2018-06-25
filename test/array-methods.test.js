const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {
    describe('map', () => {
        describe('assumptions', () => {
            it('takes a callback and returns new array with return value of each called callback', () => {
                const numbers = [2, 4, 6];
                const squared = numbers.map(n => n * n);
                assert.deepEqual(squared, [4, 16, 36]);
            });
        });

        it('takes callback and returns new array with return value of each callback', () => {
            const numbers = [2, 4, 6];
            const squared = map(numbers, (n) => n * n);
            assert.deepEqual(squared, [4, 16, 36]);
        });
    });
});