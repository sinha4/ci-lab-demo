const assert = require('assert');
const sum = require('../src/sum');

assert.strictEqual(sum(2, 3), 6);
assert.strictEqual(sum(-1, 1), 0);

console.log('All tests passed!');