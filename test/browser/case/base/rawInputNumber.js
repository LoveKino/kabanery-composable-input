'use strict';

let {
    m, RawInput
} = require('../../../..');
let {
    mount, dispatchEvent
} = require('kabanery');
let {
    delay
} = require('jsenhance');
let assert = require('assert');

let result = null;

mount(m('div', {
    value: {
        sum: 10
    },

    onchange: (v) => {
        result = v;
    }
}, (bindValue) => [
    RawInput(bindValue('sum', {
        id: 'testInput',
        type: 'number'
    }))
]), document.body);

let inputNode = document.getElementById('testInput');

inputNode.value = '30';

dispatchEvent('input', {
    target: inputNode
});

module.exports = delay(50).then(() => {
    assert.strictEqual(result.sum, 30);
});
