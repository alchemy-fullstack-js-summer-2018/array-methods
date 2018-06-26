const assert = require('assert');
const { map, every, filter } = require('../lib/array-methods');

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

// describe('index', () => {
//     it('return index of string', () => {
//         const arr = [50, 100, 185, 70, 99];
//         let result = index(arr, (indexItem) => {return indexItem > 150;});
//         assert.equal(result, [50, 100, 185, 70, 99]);      
//     });
// });

const isEven = x => x % 2 === 0;

describe('filter', () => {
    it('filter out odd values', () => {
        const numbers = [50, 63, 185, 70, 99];
        const even = [];
        numbers.filter(n => {
            even.push.isEven(n);
            return isEven(n);
        });
        assert.equal(even, true);      
    });
});