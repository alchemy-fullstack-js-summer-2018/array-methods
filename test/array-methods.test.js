const assert = require('assert');
const { map, 
    filter, 
    findIndex, 
    reduce, 
    every,
    forEach } = require('../lib/array-methods');

describe('array methods', () => {
    let testers = [1, 3, 5, 6];

    describe('map', () => {

        it('returns a new array the same length as given array', () => {
            const numbers = testers;
            const result = map(numbers, n => n);
            assert.equal(result.length, numbers.length);
        });

        it('returns a new array with changed values', () => {
            const numbers = testers;
            const result = map(numbers, n => (n * n));
            assert.deepEqual(result, [1, 9, 25, 36]);
        });
    });

    describe('filter', () => {

        it('returns a new array with odd values removed', () => {
            const numbers = testers;
            const result = filter(numbers, n => (n % 2 === 0));
            assert.deepEqual(result, [6]);
        });

        it('returns a new array with even numbers removed', () => {
            const numbers = testers;
            const result = filter(numbers, n => (n % 2 === 1));
            assert.deepEqual(result, [1, 3, 5]);
        });

        it('returns a new array with words over 5 letters in length gone', () => {
            const words = ['farm', 'running', 'chair', 'hoarder', 'hi'];
            const result = filter(words, word => (word.length <= 5));
            assert.deepEqual(result, ['farm', 'chair', 'hi']);
        }); 
    });

    describe('findIndex', () => {

        it('returns index of the first item that meets my specs', () => {
            const numbers = testers;
            const result = findIndex(numbers, n => (n > 4));
            assert.equal(result, 2);
        });

        it('returns -1 if nothing meets my specs', () => {
            const numbers = testers;
            const result = findIndex(numbers, n => (n > 10));
            assert.equal(result, -1);
        });
    });

    describe('reduce', () => {

        describe('reduce assumptions', () => {
            it('REDUCE returns the sum of all the numbers in an array', () => {
                const numbers = testers;
                const result = numbers.reduce((acc, item) => acc + item, -20);
                assert.equal(result, -5);
            });
            it('returns the sum of all the numbers in an array, bigger', () => {
                const numbers = [10, 20, 30];
                const result = numbers.reduce((acc, item) => acc + item, 0);
                assert.equal(result, 60);
            });
            it('REDUCE returns the difference of all the numbers in an array, bigger', () => {
                const numbers = [10, 20, 30];
                const result = numbers.reduce((acc, item) => acc - item, 20);
                assert.equal(result, -40);
            });
            it('REDUCE empty array should return initial value', () => {
                const numbers = [];
                const result = numbers.reduce((acc, item) => acc - item, 0);
                assert.equal(result, 0);
            });
        });

        it('returns the sum of all the numbers in an array', () => {
            const numbers = testers;
            const result = reduce(numbers, (acc, item) => (acc + item), -20);
            assert.equal(result, -5);
        });
        it('returns the sum of all the numbers in an array, bigger', () => {
            const numbers = [10, 20, 30];
            const result = reduce(numbers, (acc, item) => (acc + item), 0);
            assert.equal(result, 60);
        });
        it('returns the difference of all the numbers in an array, bigger', () => {
            const numbers = [10, 20, 30];
            const result = reduce(numbers, (acc, item) => (acc - item), 20);
            assert.equal(result, -40);
        });
        it('empty array should return initial value', () => {
            const numbers = [];
            const result = reduce(numbers, (acc, item) => (acc - item), 20);
            assert.equal(result, 20);
        });
    });

    describe('every', () => {

        it('returns true if all the items are less than 10', () => {
            const numbers = testers;
            const result = every(numbers, n => (n < 10));
            assert.equal(result, true);
        });

        it('returns false if anything is greater than 4', () => {
            const numbers = testers;
            const result = every(numbers, n => (n > 4));
            assert.equal(result, false);
        });
    });

    describe('forEach', () => {

        it('pushes items in an array', () => {
            const numbers = testers;
            const closure = [];
            forEach(numbers, item => (closure.push(item)));
            assert.deepEqual(closure, [1, 3, 5, 6]);
        });
        it('doubles items and then pushes them into an array', () => {
            const numbers = testers;
            const closure = [];
            forEach(numbers, item => (closure.push(item * 2)));
            assert.deepEqual(closure, [2, 6, 10, 12]);
        });
    });
});