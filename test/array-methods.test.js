const assert = require('assert');
const { mapping, filtering, findingIndex, reducing, everying } = require('../lib/array-methods');

describe('array methods', () => {
    
    const numbers = [0, 1, 2, 3, 4, 5];
    const strings = ['a', 'b', 'c', 'e'];

    describe('mapping', () => {
        
        it('maps array and copies', () => {
            const a = [1, 'a', { b: '2' }];
            let called = [];
            mapping(a, (el) => {
                called.push(el);
            });
            assert.deepEqual(a, called);
        });
    });
    describe('filtering', () => {

        describe('assumption', () => {

            it('filters numbers > 2', () => {
                let na = numbers.filter(el => el > 2);
                assert.deepEqual(na, [3, 4, 5]);
            });
        });

        describe('filtering test', () => {

            it('returns odd numbers', () => { 
                let na = filtering(numbers, el => el % 2 === 1);
                assert.deepEqual(na, [1, 3, 5]);
            });

            it('returns even numbers', () => { 
                let na = filtering(numbers, el => el % 2 === 0);
                assert.deepEqual(na, [0, 2, 4]);
            });
        });
    });
    describe('finding index', () => {

        describe('assumption', () => {

            it('returns index 0', () => {
                let index = strings.indexOf('a');
                assert.equal(index, 0);
            });
        });
        describe('finding index test', () => {

            it('returns position of "e"', () => {
                let index = findingIndex(strings, (el) => {
                    return el === 'e';
                });
                assert.equal(index, 3);
            });
        });
    });
    describe('reducing', () => {

        describe('assumption', () => {

            it('returns sum of numbers in array', () => {
                let sum = numbers.reduce(((a, c) => a + c));
                assert.equal(sum, 15);
            });
        });
        describe('testing reducing', () => {

            it('returns sum', () => {
                let sum = reducing(numbers, (a, c) => {
                    return a + c;
                }, 10);
                assert.equal(sum, 25);
            });

            it('returns result', () => {
                let total = reducing(numbers, (a, c) => {
                    return a - c;
                });
                assert.equal(total, -15);
            });
        });
    });

    describe('everying', () => {

        it('returns true if every element < 10', () => {
            let result = everying(numbers, el =>  el < 10);
            assert.equal(result, true);
        });
    });

});