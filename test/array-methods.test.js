const assert = require('assert');
const { map, filter } = require('../lib/array-methods');

describe('array methods', () => {

    describe('map', () => {
        let testers = [1, 3, 5, 6];

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
        let numTesters = [3, 4, 5, 6];

        it('returns a new array with odd values removed', () => {
            const numbers = numTesters;
            const result = filter(numbers, n => (n % 2 === 0));
            assert.deepEqual(result, [4, 6]);
        });

        it('returns a new array with even numbers removed', () => {
            const numbers = numTesters;
            const result = filter(numbers, n => (n % 2 === 1));
            assert.deepEqual(result, [3, 5]);
        });

        it('returns a new array with words over 5 letters in length gone', () => {
            const words = ['farm', 'running', 'chair', 'hoarder', 'hi'];
            const result = filter(words, word => (word.length <= 5));
            assert.deepEqual(result, ['farm', 'chair', 'hi']);
        }); 
    });

    describe('findIndex' () => {


        it('returns index of the item I have given it')
    })
});