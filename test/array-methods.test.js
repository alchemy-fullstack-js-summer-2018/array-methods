const assert = require('assert');
const { map, filter, findIndex } = require('../lib/array-methods');

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
            const result = map(numbers, i => i + 1);
            assert.deepEqual(result, [4, 5, 6]);
        });
    });

    describe('filter', () => {

        describe('assumptions', () => {
            it('returns only even numbers within an array', () => {
                const numbers = [2, 4, 5, 7, 8];
                const result = numbers.filter(i => i % 2 === 0);
                assert.deepEqual(result, [2, 4, 8]);
            });
        });

        it('returns only even numbers within an array', () => {
            const numbers = [2, 4, 5, 7, 8];
            const result = filter(numbers, i => i % 2 === 0);
            assert.deepEqual(result, [2, 4, 8]);
        });
    });

    describe('findIndex', () => {

        describe('assumptions', () => {
            it('returns first index position where value is > than 25', () => {
                const numbers = [2, 25, 70, 1];
                const result = numbers.findIndex(i => i > 25);
                assert.equal(result, 2);
            });
        });

        it('returns first index position where value is > than 25', () => {
            const numbers = [2, 25, 70, 1];
            const result = findIndex(numbers, i => i > 25);
            assert.equal(result, 2);
        });

        it('returns false if no matches found', () => {
            const numbers = [2, 25, 10, 1];
            const result = findIndex(numbers, i => i > 25);
            assert.equal(result, false);
        });
    });

    describe('reduce', () => {
        
        describe('assumptions', () => {})
    });
});