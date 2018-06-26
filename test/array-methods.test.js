const assert = require('assert');
const { map, filter, findIndex, reduce } = require('../lib/array-methods');

describe ('array methods', () => {

    describe('map', () => {

        describe('assumptions', () => {
            it('returns each value in each array position by one', () => {
                const numbers = [3, 4, 5];
                const result = numbers.map(n => n + 1);
                assert.deepEqual(result, [4, 5, 6]);
            });

            it('returns same length as original array', () => {
                const numbers = [1, 2, 3, 4];
                const result = numbers.map(i => i).length;
                assert.equal(result, 4);
            });
        });

        it('returns each value in each array position by one', () => {
            const numbers = [3, 4, 5];
            const result = map(numbers, i => i + 1);
            assert.deepEqual(result, [4, 5, 6]);
        });

        it('returns same length as original array', () => {
            const numbers = [1, 2, 3, 4];
            const result = map(numbers, i => i).length;
            assert.equal(result, 4);
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
        
        describe('assumptions', () => {
            it('returns the sum of an array', () => {
                const numbers = [1, 2, 3, 4];
                const result = numbers.reduce((a, c) => a + c);
                assert.equal(result, 10);

            });
        });

        it('returns the sum of an array', () => {
            const numbers = [1, 2, 3, 4];
            const result = reduce(numbers, (a, c) => a + c);
            assert.equal(result, 10);
        });
    });
});