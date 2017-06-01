'use strict';

let {
    n, view
} = require('kabanery');

module.exports = view((data = {}) => {
    let inputAttr = {};

    for (let name in data) {
        if (name !== 'onchange' && name !== 'value') {
            inputAttr[name] = data[name];
        }
    }

    inputAttr.oninput = (e) => {
        let newValue = e.target.value;
        data.value = newValue;
        data.onchange && data.onchange(newValue);
    };

    return n('textarea', inputAttr, data.value || '');
});
