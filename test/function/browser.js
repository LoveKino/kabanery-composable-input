'use strict';

let browserJsEnv = require('browser-js-env');
let promisify = require('es6-promisify');
let fs = require('fs');
let path = require('path');
let readFile = promisify(fs.readFile);

let runFileInBrowser = (file) => {
    return readFile(file).then((str) => {
        return browserJsEnv(str, {
            testDir: path.join(path.dirname(file), `../../__test/${path.basename(file)}`),
            clean: true
        });
    });
};

let testFiles = {
    'base:base': path.join(__dirname, '../browser/case/base/base.js'),
    'base:compose': path.join(__dirname, '../browser/case/base/compose.js'),
    'base:compose2': path.join(__dirname, '../browser/case/base/compose2.js'),
    'base:source': path.join(__dirname, '../browser/case/base/source.js'),
    'base:rawInput': path.join(__dirname, '../browser/case/base/rawInput.js')
};

describe('browser', () => {
    for (let name in testFiles) {
        it(name, () => {
            return runFileInBrowser(testFiles[name]);
        });
    }
});
