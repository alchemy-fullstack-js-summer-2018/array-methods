const assert = require('assert');
const aMeth = require('../lib/array-methods');
const myMap = aMeth.myMap;
const myFilter = aMeth.myFilter;
const myFindIndex = aMeth.myFindIndex;
const myReduce = aMeth.myReduce;
const myEvery = aMeth.myEvery;

describe('array methods', () => {
    describe('map function', () => {
        const numbers = [1, 2, 3];
        const result = myMap(numbers, x => x + 1);
        it('is equal length', () => {
            assert.equal(numbers.length, result.length);  
        });
        it('copy of array with method applied', () => {
            assert.deepEqual([2, 3, 4], result);      
        });
    });
    describe('filter function', () => {
        it('value higher than 2', () => {
            const numbers = [1, 2, 3];
            const result = myFilter(numbers, x => x > 2);
            assert.deepEqual(result, [3]);    
        });
    });
    describe('find index', () => {
        it('find index of 2 which is 1', () => {
            const numbers = [1, 2, 3];
            const result = myFindIndex(numbers, x => x === 2);
            assert.equal(result, 1);
        });
        it('return -1 if nothing found', () => {
            const numbers = [1, 2, 3];
            const result = myFindIndex(numbers, x => x > 3);
            assert.equal(result, -1);
        });
    });
    describe('reduce', () => {
        it('total should be 12', () => {
            const numbers = [2, 4, 6];
            const result = myReduce(numbers, ((a, b) => a + b));
            assert.equal(result, 12);
        });
        it('total should be 15 with initialValue', () => {
            const numbers = [1, 2, 3];
            const result = myReduce(numbers, ((a, b) => a + b), 9);
            assert.equal(result, 15);
            
        });
    });
    //this test is in progress btu want to submit lab
    describe('every checks all pass test, stops at first false', () => {
        it('should return true that all numbers are less than or equal to 3', () => {
            const numbers = [1, 2, 3];
            const result = myEvery(numbers, x => x <= 3); 
            assert.deepEqual(result, true);
        });

    });
});