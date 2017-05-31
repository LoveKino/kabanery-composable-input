'use strict';

let {
    comIn, RawInput, Select
} = require('../..');

let {
    mount, view
} = require('kabanery');

let LoginView = view((data, {
    update
}) => {
    return comIn('div', {
        value: data,

        onchange: (v, source) => {
            console.log(v);
            console.log(source);
        }
    }, (bindValue) => [
        Select(bindValue('loginType', {
            options: [
                [
                    'normal',
                    'normal'
                ],
                [
                    'token', 'token'
                ]
            ],

            onchange: (v) => {
                update('loginType', v);
            }
        })),

        data.loginType === 'token' ? RawInput(bindValue('token')) : comIn('div',
            bindValue('loginData', {
                onchange: (v, source) => {
                    console.log(v);
                    console.log(source);
                }
            }),

            (bindValue) => [
                RawInput(bindValue('userName')),
                RawInput(bindValue('password', {
                    attrs: {
                        type: 'password'
                    }
                }))
            ])
    ]);
});

mount(LoginView({
    loginType: 'normal',
    loginData: {
        userName: '',
        password: ''
    },
    token: ''
}), document.body);
