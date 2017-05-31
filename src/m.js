'use strict';

let {
    n
} = require('kabanery');

let {
    isObject, isFunction
} = require('basetype');

let {
    mergeMap, reduce, get
} = require('bolzano');

let {
    set
} = require('jsenhance');

/**
 * input interface
 *
 * {
 *      value,
 *      onchange
 * }
 *
 * onchange: (value) -> any
 */

/**
 * if no onchange binded on sub view, just passing changed value to parent
 */

/**
 * To compose some input UI to a large UI, we need to know how to connect input UI with large UI's part data.
 */

let m = (...args) => {
    let tagName = args[0];
    let attrs = {},
        childs = [],
        fun = null;

    if (isObject(args[1])) {
        attrs = args[1];
        fun = args[2];
    } else if (isFunction(args[1])) {
        fun = args[1];
    }

    let value = attrs.value;
    let onchange = attrs.onchange;

    if (fun) {
        let bindValue = (index, subAttrs = {}) => {
            index += '';

            // get sub value
            let subValue = get(value, index);

            let subOnchange = (v, source) => {
                // update sub value
                set(value, index, v);
                subAttrs.onchange && subAttrs.onchange(v, source);

                let prevSource = source ? index + '.' + source : index;
                onchange && onchange(value, prevSource);
            };

            return mergeMap(subAttrs, {
                value: subValue,
                onchange: subOnchange
            });
        };

        childs = fun(bindValue);
    }

    return n(tagName, reduce(attrs, (prev, cur, name) => {
        if (name !== 'value' && name !== 'onchange') {
            prev[name] = cur;
        }

        return prev;
    }, {}), childs);
};

module.exports = m;
