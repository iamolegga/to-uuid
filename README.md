# to-uuid

[![Travis][travis-badge]][travis]
[![Coverage Status][coveralls-badge]][coveralls]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![Node version support][node-version]][package]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

Module for node.js for formatting string to UUID format. A UUID is written as a sequence of lower-case hexadecimal digits, in several groups separated by hyphens, specifically a group of 8 digits followed by three groups of 4 digits followed by a group of 12 digits, for a total of 32 digits representing the 128 bits. An example of a UUID in this standard form is:
```
a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11
```

## Install

```
npm install to-uuid
```

## Usage

```js
const toUUID = require('to-uuid').toUUID;
// or
const { toUUID } = require('to-uuid');
// or
import { toUUID } from 'to-uuid'

console.log(toUUID('012345670123012301230123456789ab'))
// '01234567-0123-0123-0123-0123456789ab'
```


## License

MIT License

Copyright (c) 2017 Oleg Repin

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

[package]: https://www.npmjs.com/package/to-uuid

[travis-badge]: https://img.shields.io/travis/iamolegga/to-uuid.svg?style=flat-square
[travis]: https://travis-ci.org/iamolegga/to-uuid

[coveralls-badge]: https://img.shields.io/coveralls/github/iamolegga/to-uuid.svg?style=flat-square
[coveralls]: https://coveralls.io/github/iamolegga/to-uuid?branch=master

[version-badge]: https://img.shields.io/npm/v/to-uuid.svg?style=flat-square

[downloads-badge]: https://img.shields.io/npm/dm/to-uuid.svg?style=flat-square
[npmcharts]: https://npmcharts.com/compare/to-uuid

[node-version]: https://img.shields.io/node/v/to-uuid.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/to-uuid.svg?style=flat-square
[license]: https://github.com/iamolegga/to-uuid/blob/master/LICENSE

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/iamolegga/to-uuid/blob/master/CODE_OF_CONDUCT.md
