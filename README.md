# to-uuid

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
