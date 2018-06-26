const assert = require('assert');
const { map, filter, findIndex, reduce, every } = require('../lib/array-methods.js');

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


    describe('filter', () => {

        describe('assumption', () => {

            it('should extract all numbers greater than 10', () => {
                const numbers = [0, 5, 10, 15, 20];
                const result = numbers.filter(n => n > 10);
                assert.deepEqual(result, [15, 20]);
            });

            it('should return an empty array', () => {
                const numbers = [];
                const result = numbers.filter(n => n < 0);
                assert.deepEqual(result, []);
            });
        });
        
        it('should extract all numbers greater than 10', () => {
            const numbers = [0, 5, 10, 15, 20];
            const result = filter(numbers, n => n > 10);
            assert.deepEqual(result, [15, 20]);
        });

        it('should return an empty array', () => {
            const numbers = [];
            const result = filter(numbers, n => n < 0);
            assert.deepEqual(result, []);
        });
        
    });

    describe('findIndex', () => {

        describe('assumption', () => {

            it('should find the index of the first 5 (3)', () => {
                const numbers = [2, 6, 8, 5, 5];
                const result = numbers.findIndex(n => n === 5);
                assert.equal(result, 3);
            });

            it('should return -1 when nothing is found', () => {
                const numbers = [1, 3, 5, 7];
                const result = numbers.findIndex(n => n > 7);
                assert.equal(result, -1);
            });
        });
        
        it('should find the index of 5 (3)', () => {
            const numbers = [2, 6, 8, 5, 5];
            const result = findIndex(numbers, n => n === 5);
            assert.equal(result, 3);
        });

        it('should return -1 when nothing is found', () => {
            const numbers = [1, 3, 5, 7];
            const result = findIndex(numbers, n => n > 7);
            assert.equal(result, -1);
        });
    });

    describe('reduce', () => {

        describe('assumption', () => {

            it('should add up all the items in the array', () => {
                const numbers = [1, 2, 3, 4, 5];
                const result = numbers.reduce((c, i) => c + i);
                assert.equal(result, 15);
            });
            
            it('should total up all the items in the array, starting at the initial value', () => {
                const numbers = [1, 2, 3, 4, 5];
                const result = numbers.reduce(((c, i) => c + i), 10);
                assert.equal(result, 25);
            });

            it('should subtract up all the items in the array, starting at the first item of the array', () => {
                const numbers = [5, 4, 3, 2, 1];
                const result = numbers.reduce((c, i) => c - i);
                assert.equal(result, -5);
            });

            it('should return the only item of the array, regardless of callback', () => {
                const numbers = [6];
                const result = numbers.reduce((c, i) => c * i);
                assert.equal(result, 6);
            });

            it('should return the initial value (0) when passed an empty array', () => {
                const empty = [];
                const result = empty.reduce(((c, i) => c + i), 0);
                assert.equal(result, 0);
            });
            
            it('should return TypeError for empty array', () => {
                try {
                    const empty = [];
                    empty.reduce((c, i) => c + i);
                    assert.fail('Should have thrown error');
                }
                catch(err) {
                    assert.equal(err.message, 'Reduce of empty array with no initial value');
                }
            });
        });
        
        it('should add up all the items in the array', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = reduce(numbers, (c, i) => c + i);
            assert.equal(result, 15);
        });
        
        it('should total up all the items in the array, starting at the initial value', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = reduce(numbers, ((c, i) => c + i), 10);
            assert.equal(result, 25);
        });

        it('should subtract up all the items in the array, starting at the first item of the array', () => {
            const numbers = [5, 4, 3, 2, 1];
            const result = reduce(numbers, (c, i) => c - i);
            assert.equal(result, -5);
        });

        it('should return the only item of the array, regardless of callback', () => {
            const numbers = [6];
            const result = reduce(numbers, (c, i) => c * i);
            assert.equal(result, 6);
        });

        it('should return the initial value when passed an empty array', () => {
            const empty = [];
            const result = reduce(empty, ((c, i) => c + i), 7);
            assert.equal(result, 7);
        });

        it('should return TypeError for empty array w/ no initial value', () => {
            try {
                const empty = [];
                empty.reduce((c, i) => c + i);
                assert.fail('Should have thrown error');
            }
            catch(err) {
                assert.equal(err.message, 'Reduce of empty array with no initial value');
            }
        });

        // TODO - account for empty array + 0 as initialValue
    });

    describe('every', () => {

        describe('assumptions', () => {

            it('should return true for every item matching', () => {
                const numbers = [4, 5, 6, 7];
                const result = numbers.every(n => n > 3);
                assert.equal(result, true);
            });

            it('should return false for any item failing the callback', () => {
                const numbers = [4, 5, 6, 7];
                const result = numbers.every(n => n === 4);
                assert.equal(result, false);
            });
            
            it('should return true for any callback given an empty array', () => {
                const numbers = [];
                const result = numbers.every(n => n < 9000);
                assert.equal(result, true);
            });
        });

        it('should return true for every item matching', () => {
            const numbers = [4, 5, 6, 7];
            const result = every(numbers, n => n > 3);
            assert.equal(result, true);
        });

        it('should return false for any item failing the callback', () => {
            const numbers = [4, 5, 6, 7];
            const result = every(numbers, n => n === 4);
            assert.equal(result, false);
        });
        
        it('should return true for any callback given an empty array', () => {
            const numbers = [];
            const result = every(numbers, n => n < 9000);
            assert.equal(result, true);
        });
    });
});