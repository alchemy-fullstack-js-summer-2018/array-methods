const assert = require('assert');
const { map, filter, findIndex, reduce, every } = require('../lib/Arrays');



describe('array methods', () => {
    // Map array
    describe('map assumptions', () => {
        it('maps an array', () => {
            const numbers = [1, 2, 3]; 
            const mapped = numbers.map(n => n + 1);
            assert.deepEqual(mapped, [2, 3, 4]);
        });
    });
    describe('map', () => {
        it('maps numbers', () => {
            const numbers = [1, 2, 3]; 
            const mapped = map(numbers, (n) => n + 1);
            assert.deepEqual(mapped, [2, 3, 4]);
        });
    });
    // Filter arrays
    describe('filter assumptions', () => {
        it('filters an array', () => {
            const numbers = [1, 2, 3];
            const filtered = numbers.filter(n => n < 3);
            assert.deepEqual(filtered, [1, 2]);
        });
    });
    describe('filter', () => {
        it('filter numbers', () => {
            const numbers = [1, 2, 3];
            const filtered = filter(numbers, (n) => n < 3);
            assert.deepEqual(filtered, [1, 2]);
        });
    });
    // Find index of arrays
    describe('find index', () => {
        it('finds first index', () => {
            const numbers = [1, 2, 3];
            const index = findIndex(numbers, (n) => n === 1);
            assert.deepEqual(index, 0);
        });

    });
    // Reduce arrays
    describe('reduce array', () => {
        it('reduces to single value', () => {
            const numbers = [1, 2, 3];
            const reduced = reduce(numbers, (n, c) => n + c);
            assert.deepEqual(reduced, 6);
        });
    });
    // Every
    describe('every array requirement', () => {
        it('array values should meet requirement', () => {
            const numbers = [1, 2, 3];
            const every = numbers.every(x => x <= 3);
            assert.deepEqual(every, true);
        });
    });
});