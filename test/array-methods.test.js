const assert = require('assert');
const { map, filter, findIndex } = require('../lib/array-methods');

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
            const tripled = map(numbers, n => n * 3);
            assert.deepEqual(tripled, [6, 12, 18]);
        });
    });

    describe('filter', () => {
        describe('assumptions', () => {
            it('takes a callback and returns new array with all items whose callback returned truthy', () => {
                const numbers = [4, 7, 8];
                const evens = numbers.filter(n => n % 2 === 0);
                assert.deepEqual(evens, [4, 8]);
            });
        });

        it('takes callback and returns new array with all items whose callback returned truthy', () => {
            const numbers = [3, 6, 7, 8, 10];
            const odds = filter(numbers, n => n % 2 === 1);
            assert.deepEqual(odds, [3, 7]);
        });
    });

    describe('findIndex', () => {
        describe('assumptions', () => {
            it('takes a callback and returns the first item whose callback returned truthy', () => {
                const numbers = [1, 4, 11, 15];
                const index = numbers.findIndex(n => n > 10);
                assert.deepEqual(index, 2);
            });
            it('returns -1 when no truthy values found', () => {
                const numbers = [1, 4, 11, 15];
                const index = numbers.findIndex(n => n > 16);
                assert.deepEqual(index, -1);
            });
        });

        it('takes a callback and returns first item whose callback returned truthy', () => {
            const numbers = [1, 3, 10, 7, 5, 72, 7, 9];
            const index = findIndex(numbers, n => n === 7);
            assert.deepEqual(index, 3);
        });
        it('returns -1 when no truthy values found', () => {
            const numbers = [1, 3, 10, 7, 5, 72, 7, 9];
            const index = findIndex(numbers, n => n === 8);
            assert.deepEqual(index, -1);
        });
    });
});