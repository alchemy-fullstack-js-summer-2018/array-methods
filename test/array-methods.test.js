const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {
    it('map', () => {
        const arr = [1, 3, 5, 7];
        //returned array = original array
        let returnedArr = map(arr, (item) => {return item;});
        assert.deepEqual(returnedArr, arr);
    });

});