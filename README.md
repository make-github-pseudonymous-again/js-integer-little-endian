[@aureooms/js-integer-little-endian](https://aureooms.github.io/js-integer-little-endian)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Little-Endian.svg" width="864">

Integer numbers little endian library for JavaScript.
Twin project of [@aureooms/js-integer-big-endian](https://github.com/aureooms/js-integer-big-endian).

```js
integer.parse( 16 , 100 , 'ff' ) ; // [ 2 , 55 ]
integer.stringify( 100 , 16 , [ 2 , 55 ] ) ; // 'ff'
```

[![License](https://img.shields.io/github/license/aureooms/js-integer-little-endian.svg)](https://raw.githubusercontent.com/aureooms/js-integer-little-endian/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-integer-little-endian.svg)](https://www.npmjs.org/package/@aureooms/js-integer-little-endian)
[![Build](https://img.shields.io/travis/aureooms/js-integer-little-endian/master.svg)](https://travis-ci.org/aureooms/js-integer-little-endian/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-integer-little-endian.svg)](https://david-dm.org/aureooms/js-integer-little-endian)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-integer-little-endian.svg)](https://david-dm.org/aureooms/js-integer-little-endian?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-integer-little-endian.svg)](https://github.com/aureooms/js-integer-little-endian/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-integer-little-endian.svg)](https://www.npmjs.org/package/@aureooms/js-integer-little-endian)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-integer-little-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-little-endian/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-integer-little-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-little-endian/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-integer-little-endian/master.svg)](https://codecov.io/gh/aureooms/js-integer-little-endian)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-integer-little-endian.svg)](https://codeclimate.com/github/aureooms/js-integer-little-endian/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-integer-little-endian/badge.svg)](https://aureooms.github.io/js-integer-little-endian/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-integer-little-endian)](https://bundlephobia.com/result?p=@aureooms/js-integer-little-endian)


## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
