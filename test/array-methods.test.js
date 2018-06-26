const assert = require('assert');
const { map, filter, findIndex } = require('../lib/array-methods');

describe('array methods', () => {
    const numbers = [1, 2, 3];

    it('returns array of the same length as given', () => {
        numbers;
        const newNum = map(numbers, n => n);
        assert.equal(newNum.length, numbers.length);
    });

    it('returns a new array with the return value of each callback', () => {
        numbers;
        const newNum = map(numbers, n => (n + 1));

        assert.deepEqual(newNum, [2, 3, 4]);
    });

    it('returns new arr with items whose callback returns true', () => {
        numbers;
        const filtered = filter(numbers, n => n >= 2);
        assert.deepEqual(filtered, [2, 3]);
    });

    it('returns index of first item whose callback returns true', () => {
        let numbers = [1, 2, , 4];
        const index = findIndex(numbers, n => n < 3);
        assert.deepEqual(index, 0);
    });
});