import {sum} from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('Testing sum function', (t) => {
    assert.strictEqual(sum(1,2),3, '1 + 2 seharusnya 3');
    assert.strictEqual(sum(-1,-1), -2, '-1 + -1 seharusnya -2');
    assert.strictEqual(sum(0,0), 0, '0 + 0 seharusnya 0');
    assert.strictEqual(sum(1.5, 2.5), 4, '1.5 + 2.5 seharusnya 4');
})