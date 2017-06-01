module.exports = require('./src');

/**
 * @readme-quick-run
 *
 * ## test tar=js r_c=KabaneryFlow env=browser
 *
 * let {mount} = require('kabanery');
 * let {m, RawInput} = KabaneryFlow;
 *
 * mount(m('div', {
 *    value: {
 *      name: 'abc'
 *    },
 *
 *    onchange: (v) => {
 *       console.log(v); // {name: 'new value'}
 *    }
 * }, (bindValue) => [
 *    RawInput(bindValue('name', {
 *       id: 'test'
 *    }))
 * ]), document.body);
 *
 * console.log(document.getElementById('test').value);
 */
