const assert = require('assert');
const { map every } = require('../lib/array-methods');

describe('map', () => {
    it('new array matches original array', () => {
        const arr = [1, 3, 5, 7];
        //returned array = original array
        let returnedArr = map(arr, (item) => {return item;});
        assert.deepEqual(returnedArr, arr);
    });
});

describe('every', () => {
    it('every item is included', () => {
        const arr = [50, 62, 185, 70];
        let result = (arr, (item) => {item > 49;});
        assert.equal(result, true);      
    });
});