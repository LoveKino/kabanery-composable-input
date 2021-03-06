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

mount(m('div', {
    value: {
        doClick: 0
    },

    onchange: (v) => {
        changes.push(JSON.parse(JSON.stringify(v)));
    }
}, (bindValue) => [
    n('button',
        clickSignal(bindValue('doClick', {
            id: 'testBtn'
        }))
    )
]), document.body);

document.getElementById('testBtn').click();

module.exports = delay(50).then(() => {
    assert.deepEqual(changes, [{
        doClick: 1
    }, {
        doClick: 0
    }]);
});
