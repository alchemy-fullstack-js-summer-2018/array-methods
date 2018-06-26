const assert = require('assert');
const { map, every, filter, index } = require('../lib/array-methods');

describe('map', () => {
    it('new array matches original array', () => {
        const arr = [1, 3, 5, 7];
        //returned array = original array
        let returnedArr = map(arr, (item) => {return item * item;});
        assert.deepEqual(returnedArr, [1, 9, 25, 49]);
    });
});

describe('every', () => {
    it('every item is included', () => {
        const arr = [50, 63, 185, 70, 99];
        let result = every(arr, (item) => {return item > 49;});
        assert.deepEqual(result, [50, 63, 185, 70, 99]);      
    });
});

describe('index', () => {
    it('return index of string', () => {
        const arr = [50, 100, 185, 70, 99];
        let result = index(arr, (item) => item > 150);
        assert.deepEqual(result, 2);      
    });
});

//TO-DO: REMOVE BELOW LINE FROM CODE IF LEFT UNUSED
//const isEven = x => x % 2 === 0;

describe('filter', () => {
    it('filter out large values', () => {
        const numbers = [50, 133, 185, 70, 99];
        const filterOut = [];
        for(var k = 0; k < numbers.length; k++) {
            if(numbers[k] >= 99) {
                filterOut.push(numbers[k]);
            }
        }   
        let result = filter(numbers, (item) => {return item >= 99;});
        assert.deepEqual(result, [133, 185, 99]);
    });
});