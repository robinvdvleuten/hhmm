# hhmm

[![Build Status](https://travis-ci.org/robinvdvleuten/hhmm.svg?branch=master)](https://travis-ci.org/robinvdvleuten/hhmm)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Convert a digit time string to milliseconds: `'22:17'` → `80220000`

## Installation

```
$ yarn add hhmm
```

Alternatively using npm:

```
$ npm install --save hhmm
```

## Usage

```js
const hhmm = require('hhmm')

// hours:minutes
hhmm('22:17')
//=> 80220000

// hours
hhmm('22')
//=> 79200000

// hours:minutes
hhmm('00:22')
//=> 1320000

```

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
