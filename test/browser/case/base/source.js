'use strict';

let {
    m, clickSignal
} = require('../../../..');
let {
    mount, n
} = require('kabanery');
let {
    delay
} = require('jsenhance');
let assert = require('assert');

let changes = [];

let innerChanges = [];

mount(m('div', {
    value: {
        nextData: {
            doClick: 0
        }
    },

    onchange: (v, source) => {
        changes.push(source);
    }
}, (bindValue) => [
    m('div', bindValue('nextData', {
        onchange: (v, source) => {
            innerChanges.push(source);
        }
    }), (bindValue) => [
        n('button',
            clickSignal(bindValue('doClick', {
                id: 'testBtn'
            }))
        )
    ])
]), document.body);

document.getElementById('testBtn').click();

module.exports = delay(50).then(() => {
    assert.deepEqual(changes, ['nextData.doClick', 'nextData.doClick']);

    assert.deepEqual(innerChanges, ['doClick', 'doClick']);
});
