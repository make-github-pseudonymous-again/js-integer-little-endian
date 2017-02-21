'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._convert_to_larger = _convert_to_larger;

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

function _convert_to_larger(f, t, a, ai, aj, b, bi, bj) {
  var _log2 = (0, _._log)(t, f),
      _log3 = _slicedToArray(_log2, 2),
      z = _log3[0],
      x = _log3[1];

  if (x === 1) return (0, _._convert_to_larger_fast)(f, z, a, ai, aj, b, bi, bj);

  return (0, _._convert_slow)(f, t, a, ai, aj, b, bi, bj);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3RvX2xhcmdlci5qcyJdLCJuYW1lcyI6WyJfY29udmVydF90b19sYXJnZXIiLCJmIiwidCIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJ6IiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFjZ0JBLGtCLEdBQUFBLGtCOztBQWRoQjs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0Esa0JBQVQsQ0FBOEJDLENBQTlCLEVBQWtDQyxDQUFsQyxFQUFzQ0MsQ0FBdEMsRUFBMENDLEVBQTFDLEVBQStDQyxFQUEvQyxFQUFvREMsQ0FBcEQsRUFBd0RDLEVBQXhELEVBQTZEQyxFQUE3RCxFQUFrRTtBQUFBLGNBRXRELFlBQU1OLENBQU4sRUFBVUQsQ0FBVixDQUZzRDtBQUFBO0FBQUEsTUFFaEVRLENBRmdFO0FBQUEsTUFFNURDLENBRjREOztBQUl4RSxNQUFLQSxNQUFNLENBQVgsRUFBZSxPQUFPLCtCQUF5QlQsQ0FBekIsRUFBNkJRLENBQTdCLEVBQWlDTixDQUFqQyxFQUFxQ0MsRUFBckMsRUFBMENDLEVBQTFDLEVBQStDQyxDQUEvQyxFQUFtREMsRUFBbkQsRUFBd0RDLEVBQXhELENBQVA7O0FBRWYsU0FBTyxxQkFBZVAsQ0FBZixFQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCQyxFQUEzQixFQUFnQ0MsRUFBaEMsRUFBcUNDLENBQXJDLEVBQXlDQyxFQUF6QyxFQUE4Q0MsRUFBOUMsQ0FBUDtBQUVBIiwiZmlsZSI6Il9jb252ZXJ0X3RvX2xhcmdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9sb2cgLCBfY29udmVydF9zbG93ICwgX2NvbnZlcnRfdG9fbGFyZ2VyX2Zhc3QgfSBmcm9tICcuLycgO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZiB0aGUgYmFzZSB0byBjb252ZXJ0IGZyb21cbiAqIEBwYXJhbSB7TnVtYmVyfSB0IHRoZSBiYXNlIHRvIGNvbnZlcnQgdG9cbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIG9yaWdpbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGFpIHN0YXJ0IG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWogZW5kIG9mZnNldCBpbiB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBiIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJpIHN0YXJ0IG9mZnNldCBpbiB0aGUgZGVzdGluYXRpb24gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiaiBlbmQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udmVydF90b19sYXJnZXIgKCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Y29uc3QgWyB6ICwgeCBdID0gX2xvZyggdCAsIGYgKSA7XG5cblx0aWYgKCB4ID09PSAxICkgcmV0dXJuIF9jb252ZXJ0X3RvX2xhcmdlcl9mYXN0KCBmICwgeiAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSA7XG5cblx0cmV0dXJuIF9jb252ZXJ0X3Nsb3coIGYgLCB0ICwgYSAsIGFpICwgYWogLCBiICwgYmkgLCBiaiApIDtcblxufVxuIl19