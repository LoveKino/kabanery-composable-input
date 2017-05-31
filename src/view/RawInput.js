'use strict';

let {
    n, view
} = require('kabanery');

let {
    mergeMap
} = require('bolzano');

let RawInput = view((data = {}) => {
    return n('input', mergeMap({
        value: data.value,
        oninput: (e) => {
            let newValue = e.target.value;
            data.value = newValue;
            data.onchange && data.onchange(newValue);
        }
    }, data.attrs));
});

module.exports = RawInput;
