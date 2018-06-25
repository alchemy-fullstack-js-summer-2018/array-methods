const assert = require('assert');
const { map } = require('../lib/array-methods');

describe('array methods', () => {
    describe('map', () => {
        const arr = [1, 3, 5, 7];
        //returned array = original array
        const returnedArr = [];
        assert.deepEqual(returnedArr, [1, 3, 5, 7]);
    });

});