'use strict';

let {
    n, view
} = require('kabanery');

let {
    isObject, isFunction
} = require('basetype');

let {
    mergeMap, reduce
} = require('bolzano');

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

let comIn = (...args) => {
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

    let value = attrs.value || [];
    let onchange = attrs.onchange;

    if (fun) {
        let bindTuple = (index, subAttrs = {}) => {
            let subValue = value[index];
            let subOnchange = (v) => {
                value[index] = v;
                onchange && onchange.apply(undefined, value);
            };

            return mergeMap(subAttrs, {
                value: subValue,
                onchange: subOnchange
            });
        };

        childs = fun(bindTuple);
    }

    return n(tagName, reduce(attrs, (prev, cur, name) => {
        if (name !== 'value' && name !== 'onchange') {
            prev[name] = cur;
        }
        return prev;
    }, {}), childs);
};

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

module.exports = {
    comIn,
    RawInput
};
