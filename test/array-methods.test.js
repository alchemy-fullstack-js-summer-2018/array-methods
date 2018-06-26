const assert = require('assert');
const { map, filter, findIndex, reduce, every } = require('../lib/array-methods');

describe('array methods', () => {
    const numbers = [1, 2, 3];

    it('returns array of the same length as given', () => {
        const newNum = map(numbers, n => n);
        assert.equal(newNum.length, numbers.length);
    });

    it('returns a new array with the return value of each callback', () => {
        const newNum = map(numbers, n => (n + 1));

        assert.deepEqual(newNum, [2, 3, 4]);
    });

    it('returns new arr with items whose callback returns true', () => {
        const filtered = filter(numbers, n => n >= 2);
        assert.deepEqual(filtered, [2, 3]);
    });

    it('returns index of first item whose callback returns true', () => {
        const index = findIndex(numbers, n => n < 3);
        assert.deepEqual(index, 0);
    });

    it('return value is passed as accum arg of the next fn call without initial value', () => {
        const sum = reduce(numbers, (accum, item) => accum + item);
        assert.equal(sum, 6);
    });

    it('return value is passed as accum arg of the next fn call with initial value', () => {
        const result = reduce(numbers, (accum, item) => accum + item, 10);
        assert.equal(result, 16);
    });

    it('returns overall true value if all callback items return true', () => {
        const result = every(numbers, n => n < 12);
        assert.equal(result, true);
    });
});