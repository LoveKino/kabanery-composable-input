'use strict';

let Select = require('kabanery-select');

module.exports = (data) => {
    return Select({
        options: data.options,
        slected: data.value,
        onchange: data.onchange
    });
};
