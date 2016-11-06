The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const measure = require( 'aureooms-js-integer-little-endian' ) ;
// or
import measure from 'aureooms-js-integer-little-endian' ;
```
