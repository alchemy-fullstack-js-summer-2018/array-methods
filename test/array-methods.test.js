const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {

    describe('map', () => {
        
        describe('assumptions', () => {

            it('return an new array the same length as given', () => {
                const numbers = [1, 2, 3, 5];
                const result = numbers.map(n => n);
                assert.equal(result.length, numbers.length);
            });
        });

        it('returns a new array the same length as given array', () => {
            const tester = [1, 3, 5, 6];
            const result = map(tester);
            assert.equal(result.length, tester.length);
        });
    });
});