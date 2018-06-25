const assert = require('assert');
const arrayMethods = require('../lib/arrays');
const map = arrayMethods.map;

describe('arrays', () => {
    it('creates new array with previous items', () => {
        const array1 =[2,4,6,8]; 
        const newArray = [];
        assert.equal(newArray.push(array1));
    });
});