'use strict';

let {
    comIn, RawInput
} = require('../..');

let {
    mount
} = require('kabanery');

mount(comIn('div', {
    value: ['20', 'haha!'],
    onchange: (v1, v2) => {
        console.log('------------');
        console.log(v1, v2);
        return {
            v1, v2
        };
    }
}, (bindTuple) => [
    RawInput(bindTuple(0)),
    RawInput(bindTuple(1))
]), document.body);
