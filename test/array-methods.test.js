const assert = require('assert');
const { mapFunction, filterFunction, indexOfFunction, reduceFunction, everyFunction } = require('../lib/array-methods');

describe('Array Methods', () => {


    describe('.map()', () => {

        it('Returns new array mapped from original array', () => {
            const arr = [1, 3, 5];
            const result = mapFunction(arr, (item) => item + 10);
            assert.deepEqual(result, [11, 13, 15]);
        });
    });

    describe('.filter()', () => {

        it('Returns the new array of "filtered" items', () => {
            const arr = [1, 3, 5, 7, 9, 10, 11];
            const result = filterFunction(arr, (item) => item >= 7);
            assert.deepEqual(result, [7, 9, 10, 11]);
        });
    });

    describe('.findIndex()', () => {

        it('Returns the index of the first true or truthy item in the array', () => {
            const arr = [1, 2, 3, 4, 5, 6];
            const result = indexOfFunction(arr, (item) => item >= 3);
            assert.deepEqual(result, 2);
        });

        it('Returns -1 if the item is not found', () => {
            const arr = ['bikes', 'beers', 'cats'];
            const result = indexOfFunction(arr, (item) => item === 'dogs');
            assert.deepEqual(result, -1);
        });
    });

    describe('.reduce()', () => {
        
        it('Returns final accumulator value without optional initialValue', () => {
            const arr = [5, 4, 1];
            const result = reduceFunction(arr, ((total, amount) => total + amount));
            assert.deepEqual(result, 10);
        });

        it('Returns final accumulator value with optional initialValue', () => {
            const arr = [2, 4, 1];
            const result = reduceFunction(arr, ((total, amount) => total + amount), 10);
            assert.deepEqual(result, 17);
        });
    });

    describe('.every()', () => {

        it('Return true if every array item meets the given test', () => {
            const arr = [2, 4, 6, 8, 10];
            const result = everyFunction(arr, (item) => item % 2 === 0);
            assert.deepEqual(result, true);
        });

        it('Return false if any item fails the given test', () => {
            const arr = [2, 47, 6, 4, 12];
            const result = everyFunction(arr, (item) => item % 2 === 0);
            assert.deepEqual(result, false);
        });
    });
});