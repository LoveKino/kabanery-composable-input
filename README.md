# kabanery-flow

[中文文档](./README_zh.md)   [document](./README.md)

A general approach to compose UIs with value and onchange interface
- [install](#install)
- [usage](#usage)
  * [API quick run](#api-quick-run)
- [develop](#develop)
  * [file structure](#file-structure)
  * [run tests](#run-tests)
- [license](#license)

## install

`npm i kabanery-flow --save` or `npm i kabanery-flow --save-dev`

Install on global, using `npm i kabanery-flow -g`



## usage








### API quick run



```js
let KabaneryFlow = require('kabanery-flow')
let {mount} = require('kabanery');
let {m, RawInput} = KabaneryFlow;

mount(m('div', {
   value: {
     name: 'abc'
   },

   onchange: (v) => {
      console.log(v); // {name: 'new value'}
   }
}, (bindValue) => [
   RawInput(bindValue('name', {
      id: 'test'
   }))
]), document.body);

console.log(document.getElementById('test').value);
```

```
output

    abc

```


## develop

### file structure

```
.    
│──LICENSE    
│──README.md    
│──README_zh.md    
│──example    
│   └──login    
│       │──assets    
│       │   └──app.js    
│       │──index.html    
│       │──index.js    
│       └──webpack.config.js    
│──index.js    
│──package.json    
│──src    
│   │──index.js    
│   │──m.js    
│   │──signal    
│   │   └──clickSignal.js    
│   └──view    
│       │──RawInput.js    
│       └──Select.js    
└──test    
    │──browser    
    │   └──__test    
    └──function    
        └──browser.js     
```


### run tests

`npm test`

## license

MIT License

Copyright (c) 2017 chenjunyu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
