const assert = require('assert');
const { map } = require('../lib/array-methods');

describe ('array methods', () => {

    describe('map', () => {

        describe('assumptions', () => {
            it('returns each value in each array position by one', () => {
                const numbers = [3, 4, 5];
                const result = numbers.map(n => n + 1);
                assert.deepEqual(result, [4, 5, 6]);
            });
        });

        it('returns each value in each array position by one', () => {
            const numbers = [3, 4, 5];
            const result = map(numbers, n => n + 1);
            assert.deepEqual(result, [4, 5, 6]);
        });
    });
});