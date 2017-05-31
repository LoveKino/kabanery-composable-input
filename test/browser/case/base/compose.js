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
        nextData: {
            doClick: 0
        }
    },

    onchange: (v) => {
        changes.push(JSON.parse(JSON.stringify(v)));
    }
}, (bindValue) => [
    m('div', bindValue('nextData'), (bindValue) => [
        n('button',
            clickSignal(bindValue('doClick', {
                id: 'testBtn'
            }))
        )
    ])
]), document.body);

document.getElementById('testBtn').click();

module.exports = delay(50).then(() => {
    assert.deepEqual(changes, [{
        nextData: {
            doClick: 1
        }
    }, {
        nextData: {
            doClick: 0
        }
    }]);
});
