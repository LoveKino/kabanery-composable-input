'use strict';

let {
    n, view
} = require('kabanery');

let RawInput = view((data = {}) => {
    let inputAttr = {};

    for (let name in data) {
        if (name !== 'onchange') {
            inputAttr[name] = data[name];
        }
    }

    inputAttr.oninput = (e) => {
        let newValue = e.target.value;

        inputAttr.value = newValue;
        data.value = newValue;

        data.onchange && data.onchange(newValue);
    };

    return n('input', inputAttr);
});

module.exports = RawInput;
