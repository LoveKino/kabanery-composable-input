'use strict';

let {
    m, RawInput, Select, clickSignal
} = require('../..');

let {
    mount, view, n
} = require('kabanery');

let log = console.log; // eslint-disable-line

let LoginView = view((data, {
    update
}) => {
    return m('div', {
        value: data,

        onchange: (v, source) => {
            log(v);
            log(source);
        },

        doClick: 0
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

        data.loginType === 'token' ? RawInput(bindValue('token')) : m('div',
            bindValue('loginData', {
                onchange: (v, source) => {
                    log(v);
                    log(source);
                }
            }),

            (bindValue) => [
                RawInput(bindValue('userName')),
                RawInput(bindValue('password', {
                    attrs: {
                        type: 'password'
                    }
                }))
            ]),

        n('button', clickSignal(bindValue('doClick')), 'sure')
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
