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

let innerestChanges = [];

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
    m('div', bindValue('nextData', {
        onchange: (v) => {
            innerChanges.push(JSON.parse(JSON.stringify(v)));
        }
    }), (bindValue) => [
        n('button',
            clickSignal(bindValue('doClick', {
                id: 'testBtn',
                onchange: (v) => {
                    innerestChanges.push(JSON.parse(JSON.stringify(v)));
                }
            }))
        )
    ]),

]), document.body);

document.getElementById('testBtn').click();

module.exports = delay(50).then(() => {
    assert.deepEqual(innerestChanges, [1, 0]);

    assert.deepEqual(innerChanges, [{
        doClick: 1
    }, {
        doClick: 0
    }]);

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
