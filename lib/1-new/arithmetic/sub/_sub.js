"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

/**
 * Subtracts two big endian arrays, k >= i >= j
 * wraps
 *
 * @param {int} r base (radix)
 * @param {array} a first operand
 * @param {int} ai a left
 * @param {int} aj a right
 * @param {array} b second operand
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} c result, must be 0 initialized
 * @param {int} ci c left
 * @param {int} cj c right
 */

var _sub = exports._sub = function _sub(r, a, ai, aj, b, bi, bj, c, ci, cj) {
	var T,
	    C = 0;

	while (--bj >= bi) {
		--aj;--cj;
		T = C;
		C = a[aj] < b[bj] + T;
		c[cj] = a[aj] - b[bj] + (C * r - T);
	}

	while (--aj >= ai) {
		--cj;
		T = C;
		C = a[aj] < T;
		c[cj] = a[aj] + (C * r - T);
	}

	if (C) {
		while (--cj >= ci) {
			c[cj] = r - 1;
		}
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL3N1Yi9fc3ViLmpzIl0sIm5hbWVzIjpbIl9zdWIiLCJyIiwiYSIsImFpIiwiYWoiLCJiIiwiYmkiLCJiaiIsImMiLCJjaSIsImNqIiwiVCIsIkMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JPLElBQU1BLHNCQUFPLFNBQVBBLElBQU8sQ0FBV0MsQ0FBWCxFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLENBQTFCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUNDLENBQXJDLEVBQXdDQyxFQUF4QyxFQUE0Q0MsRUFBNUMsRUFBK0M7QUFDbEUsS0FBSUMsQ0FBSjtBQUFBLEtBQU9DLElBQUksQ0FBWDs7QUFFQSxRQUFNLEVBQUVMLEVBQUYsSUFBUUQsRUFBZCxFQUFpQjtBQUNoQixJQUFFRixFQUFGLENBQU0sRUFBRU0sRUFBRjtBQUNOQyxNQUFJQyxDQUFKO0FBQ0FBLE1BQUlWLEVBQUVFLEVBQUYsSUFBUUMsRUFBRUUsRUFBRixJQUFRSSxDQUFwQjtBQUNBSCxJQUFFRSxFQUFGLElBQVFSLEVBQUVFLEVBQUYsSUFBUUMsRUFBRUUsRUFBRixDQUFSLElBQWlCSyxJQUFFWCxDQUFGLEdBQU1VLENBQXZCLENBQVI7QUFDQTs7QUFFRCxRQUFNLEVBQUVQLEVBQUYsSUFBUUQsRUFBZCxFQUFpQjtBQUNoQixJQUFFTyxFQUFGO0FBQ0FDLE1BQUlDLENBQUo7QUFDQUEsTUFBSVYsRUFBRUUsRUFBRixJQUFRTyxDQUFaO0FBQ0FILElBQUVFLEVBQUYsSUFBUVIsRUFBRUUsRUFBRixLQUFTUSxJQUFFWCxDQUFGLEdBQU1VLENBQWYsQ0FBUjtBQUNBOztBQUVELEtBQUdDLENBQUgsRUFBSztBQUNKLFNBQU0sRUFBRUYsRUFBRixJQUFRRCxFQUFkLEVBQWlCO0FBQ2hCRCxLQUFFRSxFQUFGLElBQVFULElBQUksQ0FBWjtBQUNBO0FBQ0Q7QUFFRCxDQXZCTSIsImZpbGUiOiJfc3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFN1YnRyYWN0cyB0d28gYmlnIGVuZGlhbiBhcnJheXMsIGsgPj0gaSA+PSBqXG4gKiB3cmFwc1xuICpcbiAqIEBwYXJhbSB7aW50fSByIGJhc2UgKHJhZGl4KVxuICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcbiAqIEBwYXJhbSB7aW50fSBjaSBjIGxlZnRcbiAqIEBwYXJhbSB7aW50fSBjaiBjIHJpZ2h0XG4gKi9cblxuZXhwb3J0IGNvbnN0IF9zdWIgPSBmdW5jdGlvbiAoIHIgLCBhLCBhaSwgYWosIGIsIGJpLCBiaiwgYywgY2ksIGNqKXtcblx0dmFyIFQsIEMgPSAwO1xuXG5cdHdoaWxlKC0tYmogPj0gYmkpe1xuXHRcdC0tYWo7IC0tY2o7XG5cdFx0VCA9IEM7XG5cdFx0QyA9IGFbYWpdIDwgYltial0gKyBUO1xuXHRcdGNbY2pdID0gYVthal0gLSBiW2JqXSArIChDKnIgLSBUKTtcblx0fVxuXG5cdHdoaWxlKC0tYWogPj0gYWkpe1xuXHRcdC0tY2o7XG5cdFx0VCA9IEM7XG5cdFx0QyA9IGFbYWpdIDwgVDtcblx0XHRjW2NqXSA9IGFbYWpdICsgKEMqciAtIFQpO1xuXHR9XG5cblx0aWYoQyl7XG5cdFx0d2hpbGUoLS1jaiA+PSBjaSl7XG5cdFx0XHRjW2NqXSA9IHIgLSAxO1xuXHRcdH1cblx0fVxuXG59O1xuIl19