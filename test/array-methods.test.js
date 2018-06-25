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

            it('should return the length of each string', () => {
                const strings = ['banji', 'jimingo', 'poochy'];
                const result = strings.map(s => s.length);
                assert.deepEqual(result, [5, 7, 6]);
            });

            it('should return empty array', () => {
                const empty = [];
                const result = empty.map(s => s * s);
                assert.deepEqual(result, []);
            });
        });
        
        
        it('should add 1 to each number', () => {
            const numbers = [5, 8, 124, 0];
            const result = map(numbers, n => n + 1);
            assert.deepEqual(result, [6, 9, 125, 1]);
        });

        it('should return the length of each string', () => {
            const strings = ['banji', 'jimingo', 'poochy'];
            const result = map(strings, s => s.length);
            assert.deepEqual(result, [5, 7, 6]);
        });

        it('should return empty array', () => {
            const empty = [];
            const result = map(empty, s => s * s);
            assert.deepEqual(result, []);
        });
    });
});