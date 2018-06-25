const assert = require('assert');
const { map, filter, findIndex } = require('../lib/array-methods.js');

describe('array methods', () => {

    describe('map', () => {

        describe('assumption', () => {

            it('should add 1 to each number', () => {
                const numbers = [5, 8, 124, 0];
                const result = numbers.map(n => n + 1);
                assert.deepEqual(result, [6, 9, 125, 1]);
            });

            it('should return the length of each string', () => {
                const strings = ['banji', 'jimingo', 'poochy'];
                const result = strings.map(s => s.length);
                assert.deepEqual(result, [5, 7, 6]);
            });

            it('should return empty array', () => {
                const empty = [];
                const result = empty.map(s => s * s);
                assert.deepEqual(result, []);
            });
        });
        
        
        it('should add 1 to each number', () => {
            const numbers = [5, 8, 124, 0];
            const result = map(numbers, n => n + 1);
            assert.deepEqual(result, [6, 9, 125, 1]);
        });

        it('should return the length of each string', () => {
            const strings = ['banji', 'jimingo', 'poochy'];
            const result = map(strings, s => s.length);
            assert.deepEqual(result, [5, 7, 6]);
        });

        it('should return empty array', () => {
            const empty = [];
            const result = map(empty, s => s * s);
            assert.deepEqual(result, []);
        });
    });


    describe('filter', () => {

        describe('assumption', () => {

            it('should extract all numbers greater than 10', () => {
                const numbers = [0, 5, 10, 15, 20];
                const result = numbers.filter(n => n > 10);
                assert.deepEqual(result, [15, 20]);
            });

            it('should return an empty array', () => {
                const numbers = [];
                const result = numbers.filter(n => n < 0);
                assert.deepEqual(result, []);
            });
        });
        
        it('should extract all numbers greater than 10', () => {
            const numbers = [0, 5, 10, 15, 20];
            const result = filter(numbers, n => n > 10);
            assert.deepEqual(result, [15, 20]);
        });

        it('should return an empty array', () => {
            const numbers = [];
            const result = filter(numbers, n => n < 0);
            assert.deepEqual(result, []);
        });
        
    });

    describe('findIndex', () => {
        describe('assumption', () => {

            it('should find the index of the first 5 (3)', () => {
                const numbers = [2, 6, 8, 5, 5];
                const result = numbers.findIndex(n => n === 5);
                assert.equal(result, 3);
            });
        });

        it('should find the index of 5 (3)', () => {
            const numbers = [2, 6, 8, 5, 9];
            const result = findIndex(numbers, n => n === 5);
            assert.equal(result, 3);
        });
    });

});