const assert = require('assert');
const { mapping } = require('../lib/array-methods');

describe('array methods', () => {

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
                const a = [1, 2, 3, 4];
                let na = a.filter(el => el > 2);
                assert.deepEqual(na, [3, 4]);
            });
        });

    });

});