'use strict';

let {
    n, view
} = require('kabanery');

module.exports = view((data = {}) => {
    let inputAttr = {};

    for (let name in data) {
        if (name !== 'onchange') {
            inputAttr[name] = data[name];
        }
    }

    inputAttr.oninput = (e) => {
        let newValue = e.target.value;
        if (inputAttr.type === 'number') {
            newValue = Number(newValue);
        }

        inputAttr.value = newValue;
        data.value = newValue;

        data.onchange && data.onchange(newValue);
    };

    return n('textarea', inputAttr);
});
