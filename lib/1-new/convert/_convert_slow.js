'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._convert_slow = _convert_slow;

var _array = require('../array');

var _arithmetic = require('../arithmetic');

var _compare = require('../compare');

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

function _convert_slow(f, t, a, ai, aj, b, bi, bj) {

	var d = (0, _array._build)(f, t);
	var di = 0;
	var dj = d.length;
	var qi = 0;
	var qj = aj - ai;
	var q = (0, _array._alloc)(qj - qi);

	while (true) {

		(0, _array._reset)(q, qi, qj);

		(0, _arithmetic._div)(f, a, ai, aj, d, di, dj, q, qi);

		--bj;
		var x = 0;

		for (var k = ai; k < aj; ++k) {
			x *= f;
			x += a[k];
		}

		b[bj] = x;

		if ((0, _compare._jz)(q, qi, qj)) return;

		(0, _array._copy)(q, qi, qj, a, ai);
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb252ZXJ0L19jb252ZXJ0X3Nsb3cuanMiXSwibmFtZXMiOlsiX2NvbnZlcnRfc2xvdyIsImYiLCJ0IiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImQiLCJkaSIsImRqIiwibGVuZ3RoIiwicWkiLCJxaiIsInEiLCJ4IiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFnQmdCQSxhLEdBQUFBLGE7O0FBaEJoQjs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsYUFBVCxDQUF5QkMsQ0FBekIsRUFBNkJDLENBQTdCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsRUFBckMsRUFBMENDLEVBQTFDLEVBQStDQyxDQUEvQyxFQUFtREMsRUFBbkQsRUFBd0RDLEVBQXhELEVBQTZEOztBQUVuRSxLQUFNQyxJQUFJLG1CQUFRUixDQUFSLEVBQVlDLENBQVosQ0FBVjtBQUNBLEtBQU1RLEtBQUssQ0FBWDtBQUNBLEtBQU1DLEtBQUtGLEVBQUVHLE1BQWI7QUFDQSxLQUFNQyxLQUFLLENBQVg7QUFDQSxLQUFNQyxLQUFLVCxLQUFLRCxFQUFoQjtBQUNBLEtBQU1XLElBQUksbUJBQVFELEtBQUtELEVBQWIsQ0FBVjs7QUFFQSxRQUFRLElBQVIsRUFBZTs7QUFFZCxxQkFBUUUsQ0FBUixFQUFZRixFQUFaLEVBQWlCQyxFQUFqQjs7QUFFQSx3QkFBTWIsQ0FBTixFQUFVRSxDQUFWLEVBQWNDLEVBQWQsRUFBbUJDLEVBQW5CLEVBQXdCSSxDQUF4QixFQUE0QkMsRUFBNUIsRUFBaUNDLEVBQWpDLEVBQXNDSSxDQUF0QyxFQUEwQ0YsRUFBMUM7O0FBRUEsSUFBRUwsRUFBRjtBQUNBLE1BQUlRLElBQUksQ0FBUjs7QUFFQSxPQUFNLElBQUlDLElBQUliLEVBQWQsRUFBbUJhLElBQUlaLEVBQXZCLEVBQTRCLEVBQUVZLENBQTlCLEVBQWtDO0FBQ2pDRCxRQUFLZixDQUFMO0FBQ0FlLFFBQUtiLEVBQUVjLENBQUYsQ0FBTDtBQUNBOztBQUVEWCxJQUFFRSxFQUFGLElBQVFRLENBQVI7O0FBRUEsTUFBSyxrQkFBS0QsQ0FBTCxFQUFTRixFQUFULEVBQWNDLEVBQWQsQ0FBTCxFQUEwQjs7QUFFMUIsb0JBQU9DLENBQVAsRUFBV0YsRUFBWCxFQUFnQkMsRUFBaEIsRUFBcUJYLENBQXJCLEVBQXlCQyxFQUF6QjtBQUVBO0FBRUQiLCJmaWxlIjoiX2NvbnZlcnRfc2xvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9idWlsZCAsIF9hbGxvYyAsIF9yZXNldCAsIF9jb3B5IH0gZnJvbSAnLi4vYXJyYXknIDtcbmltcG9ydCB7IF9kaXYgfSBmcm9tICcuLi9hcml0aG1ldGljJyA7XG5pbXBvcnQgeyBfanogfSBmcm9tICcuLi9jb21wYXJlJyA7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBmIHRoZSBiYXNlIHRvIGNvbnZlcnQgZnJvbVxuICogQHBhcmFtIHtOdW1iZXJ9IHQgdGhlIGJhc2UgdG8gY29udmVydCB0b1xuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgb3JpZ2luIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYWkgc3RhcnQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBhaiBlbmQgb2Zmc2V0IGluIHRoZSBvcmlnaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGIgdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gYmkgc3RhcnQgb2Zmc2V0IGluIHRoZSBkZXN0aW5hdGlvbiBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGJqIGVuZCBvZmZzZXQgaW4gdGhlIGRlc3RpbmF0aW9uIGFycmF5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0X3Nsb3cgKCBmICwgdCAsIGEgLCBhaSAsIGFqICwgYiAsIGJpICwgYmogKSB7XG5cblx0Y29uc3QgZCA9IF9idWlsZCggZiAsIHQgKSA7XG5cdGNvbnN0IGRpID0gMCA7XG5cdGNvbnN0IGRqID0gZC5sZW5ndGggO1xuXHRjb25zdCBxaSA9IDAgO1xuXHRjb25zdCBxaiA9IGFqIC0gYWkgO1xuXHRjb25zdCBxID0gX2FsbG9jKCBxaiAtIHFpICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdF9yZXNldCggcSAsIHFpICwgcWogKSA7XG5cblx0XHRfZGl2KCBmICwgYSAsIGFpICwgYWogLCBkICwgZGkgLCBkaiAsIHEgLCBxaSApIDtcblxuXHRcdC0tYmogO1xuXHRcdGxldCB4ID0gMCA7XG5cblx0XHRmb3IgKCBsZXQgayA9IGFpIDsgayA8IGFqIDsgKytrICkge1xuXHRcdFx0eCAqPSBmIDtcblx0XHRcdHggKz0gYVtrXSA7XG5cdFx0fVxuXG5cdFx0Yltial0gPSB4IDtcblxuXHRcdGlmICggX2p6KCBxICwgcWkgLCBxaiApICkgcmV0dXJuIDtcblxuXHRcdF9jb3B5KCBxICwgcWkgLCBxaiAsIGEgLCBhaSApIDtcblxuXHR9XG5cbn1cbiJdfQ==