'use strict';

let {
    mergeMap
} = require('bolzano');

module.exports = (attrs = {}) => {
    return mergeMap(attrs, {
        onclick: () => {
            // change value state
            attrs.onchange && attrs.onchange(1);
            // change it back
            attrs.onchange && attrs.onchange(0);
        }
    });
};
