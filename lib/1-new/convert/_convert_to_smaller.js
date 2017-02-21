'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._convert_to_smaller = _convert_to_smaller;

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

function _convert_to_smaller(f, t, a, ai, aj, b, bi, bj) {
  var _log2 = (0, _._log)(f, t),
      _log3 = _slicedToArray(_log2, 2),
      z = _log3[0],
      x = _log3[1];

  if (x === 1) return (0, _._convert_to_smaller_fast)(t, z, a, ai, aj, b, bi, bj);

  return (0, _._convert_slow)(f, t, a, ai, aj, b, bi, bj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3RvX3NtYWxsZXIuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfdG9fc21hbGxlciIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsInoiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztRQWNnQkEsbUIsR0FBQUEsbUI7O0FBZGhCOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZTyxTQUFTQSxtQkFBVCxDQUErQkMsQ0FBL0IsRUFBbUNDLENBQW5DLEVBQXVDQyxDQUF2QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLEVBQWhELEVBQXFEQyxDQUFyRCxFQUF5REMsRUFBekQsRUFBOERDLEVBQTlELEVBQW1FO0FBQUEsY0FFdkQsWUFBTVAsQ0FBTixFQUFVQyxDQUFWLENBRnVEO0FBQUE7QUFBQSxNQUVqRU8sQ0FGaUU7QUFBQSxNQUU3REMsQ0FGNkQ7O0FBSXpFLE1BQUtBLE1BQU0sQ0FBWCxFQUFlLE9BQU8sZ0NBQTBCUixDQUExQixFQUE4Qk8sQ0FBOUIsRUFBa0NOLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5REMsRUFBekQsQ0FBUDs7QUFFZixTQUFPLHFCQUFlUCxDQUFmLEVBQW1CQyxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkJDLEVBQTNCLEVBQWdDQyxFQUFoQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLEVBQXpDLEVBQThDQyxFQUE5QyxDQUFQO0FBRUEiLCJmaWxlIjoiX2NvbnZlcnRfdG9fc21hbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9sb2cgLCBfY29udmVydF9zbG93ICwgX2NvbnZlcnRfdG9fc21hbGxlcl9mYXN0IH0gZnJvbSAnLi8nIDtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGYgdGhlIGJhc2UgdG8gY29udmVydCBmcm9tXG4gKiBAcGFyYW0ge051bWJlcn0gdCB0aGUgYmFzZSB0byBjb252ZXJ0IHRvXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaSBzdGFydCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFqIGVuZCBvZmZzZXQgaW4gdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gYiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaSBzdGFydCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmogZW5kIG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZlcnRfdG9fc21hbGxlciAoIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIHtcblxuXHRjb25zdCBbIHogLCB4IF0gPSBfbG9nKCBmICwgdCApIDtcblxuXHRpZiAoIHggPT09IDEgKSByZXR1cm4gX2NvbnZlcnRfdG9fc21hbGxlcl9mYXN0KCB0ICwgeiAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA7XG5cblx0cmV0dXJuIF9jb252ZXJ0X3Nsb3coIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblxufVxuIl19