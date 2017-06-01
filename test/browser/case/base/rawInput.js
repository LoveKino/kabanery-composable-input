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
        name: 'hello'
    },

    onchange: (v) => {
        result = v;
    }
}, (bindValue) => [
    RawInput(bindValue('name', {
        id: 'testInput'
    }))
]), document.body);

let inputNode = document.getElementById('testInput');

inputNode.value = 'today';

dispatchEvent('input', {
    target: inputNode
});

module.exports = delay(50).then(() => {
    assert.deepEqual(result, {
        name: 'today'
    });
});
