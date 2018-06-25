const assert = require('assert');
const arrayMethods = require('../lib/arrays');
const map = arrayMethods.map;

describe('array methods', () => {
    it('creates new array', () => {
        const array =[2, 4, 6]; 
        const newArray = map(array);
        assert.equal(newArray, [3, 5, 7]);
    });
});