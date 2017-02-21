'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._convert = _convert;

var _ = require('./');

/**
 *
 * @param {Number} f the base to convert from
 * @param {Number} t the base to convert to
 * @param {Array} a the origin array
 * @param {Number} ai start offset in the origin array
 * @param {Number} aj end offset in the origin array
 * @param {Array} b the destination array
 * @param {Number} bi start offset in the destination array
 * @param {Number} bj end offset in the destination array
 */

function _convert(f, t, a, ai, aj, b, bi, bj) {

  if (f > t) return (0, _._convert_to_smaller)(f, t, a, ai, aj, b, bi, bj);
  if (f < t) return (0, _._convert_to_larger)(f, t, a, ai, aj, b, bi, bj);
  return (0, _._copy)(a, ai, aj, b, bi);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0LmpzIl0sIm5hbWVzIjpbIl9jb252ZXJ0IiwiZiIsInQiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7OztRQWNnQkEsUSxHQUFBQSxROztBQWRoQjs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsUUFBVCxDQUFvQkMsQ0FBcEIsRUFBd0JDLENBQXhCLEVBQTRCQyxDQUE1QixFQUFnQ0MsRUFBaEMsRUFBcUNDLEVBQXJDLEVBQTBDQyxDQUExQyxFQUE4Q0MsRUFBOUMsRUFBbURDLEVBQW5ELEVBQXdEOztBQUU5RCxNQUFLUCxJQUFJQyxDQUFULEVBQWEsT0FBTywyQkFBcUJELENBQXJCLEVBQXlCQyxDQUF6QixFQUE2QkMsQ0FBN0IsRUFBaUNDLEVBQWpDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsQ0FBM0MsRUFBK0NDLEVBQS9DLEVBQW9EQyxFQUFwRCxDQUFQO0FBQ2IsTUFBS1AsSUFBSUMsQ0FBVCxFQUFhLE9BQU8sMEJBQW9CRCxDQUFwQixFQUF3QkMsQ0FBeEIsRUFBNEJDLENBQTVCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsRUFBckMsRUFBMENDLENBQTFDLEVBQThDQyxFQUE5QyxFQUFtREMsRUFBbkQsQ0FBUDtBQUNiLFNBQU8sYUFBT0wsQ0FBUCxFQUFXQyxFQUFYLEVBQWdCQyxFQUFoQixFQUFxQkMsQ0FBckIsRUFBeUJDLEVBQXpCLENBQVA7QUFFQSIsImZpbGUiOiJfY29udmVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9jb3B5ICwgX2NvbnZlcnRfdG9fc21hbGxlciAsIF9jb252ZXJ0X3RvX2xhcmdlciB9IGZyb20gJy4vJyA7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmIHRoZSBiYXNlIHRvIGNvbnZlcnQgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IHQgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0ICggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkge1xuXG5cdGlmICggZiA+IHQgKSByZXR1cm4gX2NvbnZlcnRfdG9fc21hbGxlciggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXHRpZiAoIGYgPCB0ICkgcmV0dXJuIF9jb252ZXJ0X3RvX2xhcmdlciggZiAsIHQgLCBhICwgYWkgLCBhaiAsIGIgLCBiaSAsIGJqICkgO1xuXHRyZXR1cm4gX2NvcHkoIGEgLCBhaSAsIGFqICwgYiAsIGJpICkgO1xuXG59XG4iXX0=