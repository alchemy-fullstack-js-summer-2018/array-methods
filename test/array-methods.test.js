const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {

    it('returns array of the same length as given', () => {
        const numbers = [1, 2, 3];
        const newNum = map(numbers);
        assert.equal(newNum.length, numbers.length);
    });

    it('returns a new array with the return value of each callback', () => {
        
    });
});