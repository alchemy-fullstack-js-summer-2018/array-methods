const assert = require('assert');
const { some, map, filter, findIndex, reduce } = require('../lib/array-methods');

describe('array methods', () => {
//marty's in class some example
    describe('some', () => {

        const isEven = x => x % 2 === 0;

        describe('assumptions', () => {
    
            it('returns false if no matches', () => {
                const numbers = [1, 3, 5];
                const result = numbers.some(isEven);
                assert.equal(result, false);
            });

            it('returns true if at least one match', () => {
                const numbers = [1, 4, 5];
                const result = numbers.some(isEven);
                assert.equal(result, true);
            });

            it('short-circuits after first true match', () => {
                const numbers = [1, 4, 6];
                const called = [];
                numbers.some(n => {
                    called.push(n);
                    return isEven(n);
                });

                assert.deepEqual(called, [1, 4]);
            });
        });

        it('return false if no matches', () => {
            const numbers = [1, 3, 5];
            const result = some(numbers, isEven);
            assert.equal(result, false);
        });

        it('returns true if at least one match', () => {
            const numbers = [1, 4, 5];
            const result = some(numbers, isEven);
            assert.equal(result, true);
        });

        it('short-circuits after first true match', () => {
            const numbers = [1, 4, 6];
            const called = [];
            some(numbers, n => {
                called.push(n);
                return isEven(n);
            });

            assert.deepEqual(called, [1, 4]);
        });
    });
    //begin classwork tests
    describe('map', () => {
        it('should be a direct copy of original array', () => {
            const numbers = [1, 2, 3, 4];
            const result = map(numbers, (n) => n * n);
            assert.deepEqual(result, [1, 4, 9, 16]);
        });
    });

    describe('filter', () => {
        it('returns new array of true items', () => {
            const numbers = [1, 2, 3, 4, 5, 6];
            const result = filter(numbers, (n) => n < 4);
            assert.deepEqual(result, [1, 2, 3]);
        });
    });
    describe('findIndex', () => {
        it('returns first truthy item in array', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = findIndex(numbers, (n) => n > 3);
            assert.deepEqual(result, 3);
        });

        it('returns -1 if item not found', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = findIndex(numbers, (n) => n > 5);
            assert.deepEqual(result, -1);
        });
    });

    describe('reduce', () => {
        it('returns the sum of all array items', () => {
            const numbers = [1, 5, 4, 2, 3];
            const result = reduce(numbers, (a, b) => (a + b));
            assert.deepEqual(result, 15);
        });
    });
});

