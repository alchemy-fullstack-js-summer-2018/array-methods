const assert = require('assert');
const { map } = require('../lib/array-methods.js');

describe('array methods', () => {

    describe('map', () => {

        describe('assumption', () => {

            it('should add 1 to each number', () => {
                const numbers = [5, 8, 124, 0];
                const result = numbers.map(n => n + 1);
                assert.deepEqual(result, [6, 9, 125, 1]);
            });

        });


        it('should add 1 to each number', () => {
            const numbers = [5, 8, 124, 0];
            const result = map(numbers, n => n + 1);
            assert.deepEqual(result, [6, 9, 125, 1]);
        });

    });
});