const assert = require('assert');
const { map } = require('../lib/arrays');


describe('array methods', () => {
    it('creates new array', () => {
        const array = [2, 4, 6]; 
        const newArray = array.map;
        assert.equal(newArray, [3, 5, 7]);
    });
});