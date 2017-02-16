[@aureooms/js-integer-little-endian](https://aureooms.github.io/js-integer-little-endian)
==

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Little-Endian.svg" width="864">

Integer numbers little endian library for JavaScript.
Twin project of [@aureooms/js-integer-big-endian](https://github.com/aureooms/js-integer-big-endian).

```js
integer.parse( 16 , 100 , 'ff' ) ; // [ 2 , 55 ]
integer.stringify( 100 , 16 , [ 2 , 55 ] ) ; // 'ff'
```

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-integer-little-endian.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-integer-little-endian/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-integer-little-endian.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer-little-endian)
[![Build Status](http://img.shields.io/travis/aureooms/js-integer-little-endian.svg?style=flat)](https://travis-ci.org/aureooms/js-integer-little-endian)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-integer-little-endian.svg?style=flat)](https://coveralls.io/r/aureooms/js-integer-little-endian)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-integer-little-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-little-endian#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-integer-little-endian.svg?style=flat)](https://david-dm.org/aureooms/js-integer-little-endian#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-integer-little-endian.svg?style=flat)](https://codeclimate.com/github/aureooms/js-integer-little-endian)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-integer-little-endian.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-integer-little-endian)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-integer-little-endian.svg?style=flat)](https://github.com/aureooms/js-integer-little-endian/issues)
[![Documentation](https://aureooms.github.io/js-integer-little-endian/badge.svg)](https://aureooms.github.io/js-integer-little-endian/source.html)


## Reference

 - [The GNU Multiple Precision Arithmetic Library](https://gmplib.org/)
 - https://gmplib.org/gmp-man-6.0.0a.pdf
 - https://en.wikipedia.org/wiki/Sch%C3%B6nhage%E2%80%93Strassen_algorithm
