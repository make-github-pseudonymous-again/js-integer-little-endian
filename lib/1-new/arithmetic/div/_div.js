'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._div = undefined;

var _sub2 = require('../sub');

var _compare = require('../../compare');

/**
 * Computes quotient and remainder of two big endian arrays.
 * <p>
 * Computes quotient and remainder of two big endian arrays
 * using long division algorithm (the one teached in
 * european primary schools).
 *
 * /!\ This algorithm modifies its first operand.
 *
 * HYP : q is at least as large as r
 *       b is not zero
 *
 * @param {int} x the radix
 * @param {array} r dividend and remainder
 * @param {int} ri r left
 * @param {int} rj r right
 * @param {array} b divisor
 * @param {int} bi b left
 * @param {int} bj b right
 * @param {array} q quotient, must be 0 initialized
 * @param {int} qi q left
 */

// /!\ There are implicit hypotheses
//     made on the size of the operands.
//     Should clarify.

var _div = exports._div = function _div(x, r, ri, rj, b, bi, bj, q, qi) {

	var k,
	    t = ri + 1;

	do {

		// trim leading zeros
		//     - maybe could try to put this procedure inside the _sub loop
		//     - or assume that the number is trimed at the begining
		//       and put this statement at the end of the main loop
		while (ri < rj && r[ri] === 0) {
			++ri;
		} // search for a remainder block interval
		// greater than the divisor
		//     - maybe could try binary search on the _lt function
		//     for another implementation
		k = ri + 1;
		while (k <= rj && (0, _compare._lt)(r, ri, k, b, bi, bj)) {
			++k;
		} // remainder smaller than divisor --> end
		if (k > rj) break;

		// divide current block interval by quotient
		do {

			// increment quotient block corresponding
			// to current ls block of remainder interval
			++q[qi + k - t];

			// subtract divisor from current remainder
			// block interval
			(0, _sub2._sub)(x, r, ri, k, b, bi, bj, r, ri, k);
		} while (!(0, _compare._lt)(r, ri, k, b, bi, bj));
	} while (true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2LmpzIl0sIm5hbWVzIjpbIl9kaXYiLCJ4IiwiciIsInJpIiwicmoiLCJiIiwiYmkiLCJiaiIsInEiLCJxaSIsImsiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxzQkFBTyxTQUFQQSxJQUFPLENBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQkMsRUFBbkIsRUFBd0JDLEVBQXhCLEVBQTZCQyxDQUE3QixFQUFpQ0MsRUFBakMsRUFBc0NDLEVBQXRDLEVBQTJDQyxDQUEzQyxFQUErQ0MsRUFBL0MsRUFBb0Q7O0FBRXZFLEtBQUlDLENBQUo7QUFBQSxLQUFPQyxJQUFJUixLQUFLLENBQWhCOztBQUVBLElBQUc7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFPQSxLQUFLQyxFQUFMLElBQVdGLEVBQUVDLEVBQUYsTUFBVSxDQUE1QjtBQUErQixLQUFFQSxFQUFGO0FBQS9CLEdBTkUsQ0FRRjtBQUNBO0FBQ0E7QUFDQTtBQUNBTyxNQUFJUCxLQUFLLENBQVQ7QUFDQSxTQUFPTyxLQUFLTixFQUFMLElBQVcsa0JBQUlGLENBQUosRUFBT0MsRUFBUCxFQUFXTyxDQUFYLEVBQWNMLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixDQUFsQjtBQUE0QyxLQUFFRyxDQUFGO0FBQTVDLEdBYkUsQ0FlRjtBQUNBLE1BQUlBLElBQUlOLEVBQVIsRUFBWTs7QUFFWjtBQUNBLEtBQUU7O0FBRUQ7QUFDQTtBQUNBLEtBQUVJLEVBQUVDLEtBQUtDLENBQUwsR0FBU0MsQ0FBWCxDQUFGOztBQUVBO0FBQ0E7QUFDQSxtQkFBS1YsQ0FBTCxFQUFRQyxDQUFSLEVBQVdDLEVBQVgsRUFBZU8sQ0FBZixFQUFrQkwsQ0FBbEIsRUFBcUJDLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QkwsQ0FBN0IsRUFBZ0NDLEVBQWhDLEVBQW9DTyxDQUFwQztBQUVBLEdBVkQsUUFVUSxDQUFDLGtCQUFJUixDQUFKLEVBQU9DLEVBQVAsRUFBV08sQ0FBWCxFQUFjTCxDQUFkLEVBQWlCQyxFQUFqQixFQUFxQkMsRUFBckIsQ0FWVDtBQWFBLEVBaENELFFBZ0NRLElBaENSO0FBa0NBLENBdENNIiwiZmlsZSI6Il9kaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfc3ViIH0gZnJvbSAnLi4vc3ViJyA7XG5pbXBvcnQgeyBfbHQgfSBmcm9tICcuLi8uLi9jb21wYXJlJyA7XG5cblxuLyoqXG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5cy5cbiAqIDxwPlxuICogQ29tcHV0ZXMgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiB0d28gYmlnIGVuZGlhbiBhcnJheXNcbiAqIHVzaW5nIGxvbmcgZGl2aXNpb24gYWxnb3JpdGhtICh0aGUgb25lIHRlYWNoZWQgaW5cbiAqIGV1cm9wZWFuIHByaW1hcnkgc2Nob29scykuXG4gKlxuICogLyFcXCBUaGlzIGFsZ29yaXRobSBtb2RpZmllcyBpdHMgZmlyc3Qgb3BlcmFuZC5cbiAqXG4gKiBIWVAgOiBxIGlzIGF0IGxlYXN0IGFzIGxhcmdlIGFzIHJcbiAqICAgICAgIGIgaXMgbm90IHplcm9cbiAqXG4gKiBAcGFyYW0ge2ludH0geCB0aGUgcmFkaXhcbiAqIEBwYXJhbSB7YXJyYXl9IHIgZGl2aWRlbmQgYW5kIHJlbWFpbmRlclxuICogQHBhcmFtIHtpbnR9IHJpIHIgbGVmdFxuICogQHBhcmFtIHtpbnR9IHJqIHIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IGIgZGl2aXNvclxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqIEBwYXJhbSB7YXJyYXl9IHEgcXVvdGllbnQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuICogQHBhcmFtIHtpbnR9IHFpIHEgbGVmdFxuICovXG5cbi8vIC8hXFwgVGhlcmUgYXJlIGltcGxpY2l0IGh5cG90aGVzZXNcbi8vICAgICBtYWRlIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy5cbi8vICAgICBTaG91bGQgY2xhcmlmeS5cblxuZXhwb3J0IGNvbnN0IF9kaXYgPSBmdW5jdGlvbiAoIHggLCByICwgcmkgLCByaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkge1xuXG5cdHZhciBrLCB0ID0gcmkgKyAxO1xuXG5cdGRvIHtcblxuXHRcdC8vIHRyaW0gbGVhZGluZyB6ZXJvc1xuXHRcdC8vICAgICAtIG1heWJlIGNvdWxkIHRyeSB0byBwdXQgdGhpcyBwcm9jZWR1cmUgaW5zaWRlIHRoZSBfc3ViIGxvb3Bcblx0XHQvLyAgICAgLSBvciBhc3N1bWUgdGhhdCB0aGUgbnVtYmVyIGlzIHRyaW1lZCBhdCB0aGUgYmVnaW5pbmdcblx0XHQvLyAgICAgICBhbmQgcHV0IHRoaXMgc3RhdGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG1haW4gbG9vcFxuXHRcdHdoaWxlIChyaSA8IHJqICYmIHJbcmldID09PSAwKSArK3JpO1xuXG5cdFx0Ly8gc2VhcmNoIGZvciBhIHJlbWFpbmRlciBibG9jayBpbnRlcnZhbFxuXHRcdC8vIGdyZWF0ZXIgdGhhbiB0aGUgZGl2aXNvclxuXHRcdC8vICAgICAtIG1heWJlIGNvdWxkIHRyeSBiaW5hcnkgc2VhcmNoIG9uIHRoZSBfbHQgZnVuY3Rpb25cblx0XHQvLyAgICAgZm9yIGFub3RoZXIgaW1wbGVtZW50YXRpb25cblx0XHRrID0gcmkgKyAxO1xuXHRcdHdoaWxlIChrIDw9IHJqICYmIF9sdChyLCByaSwgaywgYiwgYmksIGJqKSkgKytrO1xuXG5cdFx0Ly8gcmVtYWluZGVyIHNtYWxsZXIgdGhhbiBkaXZpc29yIC0tPiBlbmRcblx0XHRpZiAoayA+IHJqKSBicmVhaztcblxuXHRcdC8vIGRpdmlkZSBjdXJyZW50IGJsb2NrIGludGVydmFsIGJ5IHF1b3RpZW50XG5cdFx0ZG97XG5cblx0XHRcdC8vIGluY3JlbWVudCBxdW90aWVudCBibG9jayBjb3JyZXNwb25kaW5nXG5cdFx0XHQvLyB0byBjdXJyZW50IGxzIGJsb2NrIG9mIHJlbWFpbmRlciBpbnRlcnZhbFxuXHRcdFx0KytxW3FpICsgayAtIHRdO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBkaXZpc29yIGZyb20gY3VycmVudCByZW1haW5kZXJcblx0XHRcdC8vIGJsb2NrIGludGVydmFsXG5cdFx0XHRfc3ViKHgsIHIsIHJpLCBrLCBiLCBiaSwgYmosIHIsIHJpLCBrKTtcblxuXHRcdH0gd2hpbGUoIV9sdChyLCByaSwgaywgYiwgYmksIGJqKSk7XG5cblxuXHR9IHdoaWxlKHRydWUpO1xuXG59O1xuIl19