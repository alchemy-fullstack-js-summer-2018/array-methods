const assert = require('assert');
const { mapFunction, filterFunction, indexOfFunction, reduceFunction } = require('../lib/array-methods');

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

        it('Returns the index of the first item with a true or truthy value', () => {
            const arr = ['bikes', 'beers', 'food', 'dogs', 'cats'];
            const result = indexOfFunction(arr, (item) => item.indexOf('cats'));
            assert.deepEqual(result, 4);
        });
    });

    describe('.reduce()', () => {
        
        it('Returns final accumulator value', () => {
            const arr = [2, 4, 1];
            const result = reduceFunction(arr, (item) => item.reduce((total, amount) => total + amount));
            assert.deepEqual(result, 7);
        });
    });
});