'use strict';

let {
    comIn, RawInput
} = require('../..');

let {
    mount
} = require('kabanery');

mount(

    comIn('div', {
        value: {
            loginType: 'normal',
            loginData: {
                userName: 'ddchen',
                password: '1234'
            }
        },

        onchange: (v) => {
            console.log(v);
        }
    }, (bindValue) => [
        RawInput(bindValue('loginType')),
        comIn('div',
            bindValue('loginData'),

            (bindValue) => [
                RawInput(bindValue('userName')),
                RawInput(bindValue('password', {
                    attrs: {
                        type: 'password'
                    }
                }))
            ])
    ]), document.body);
