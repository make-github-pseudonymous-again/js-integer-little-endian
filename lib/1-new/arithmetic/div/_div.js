'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._div = _div;

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

function _div(x, r, ri, rj, b, bi, bj, q, qi) {

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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8xLW5ldy9hcml0aG1ldGljL2Rpdi9fZGl2LmpzIl0sIm5hbWVzIjpbIl9kaXYiLCJ4IiwiciIsInJpIiwicmoiLCJiIiwiYmkiLCJiaiIsInEiLCJxaSIsImsiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQStCZ0JBLEksR0FBQUEsSTs7QUEvQmhCOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU0EsSUFBVCxDQUFnQkMsQ0FBaEIsRUFBb0JDLENBQXBCLEVBQXdCQyxFQUF4QixFQUE2QkMsRUFBN0IsRUFBa0NDLENBQWxDLEVBQXNDQyxFQUF0QyxFQUEyQ0MsRUFBM0MsRUFBZ0RDLENBQWhELEVBQW9EQyxFQUFwRCxFQUF5RDs7QUFFL0QsS0FBSUMsQ0FBSjtBQUFBLEtBQU9DLElBQUlSLEtBQUssQ0FBaEI7O0FBRUEsSUFBRzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQU9BLEtBQUtDLEVBQUwsSUFBV0YsRUFBRUMsRUFBRixNQUFVLENBQTVCO0FBQStCLEtBQUVBLEVBQUY7QUFBL0IsR0FORSxDQVFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLE1BQUlQLEtBQUssQ0FBVDtBQUNBLFNBQU9PLEtBQUtOLEVBQUwsSUFBVyxrQkFBSUYsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLENBQWxCO0FBQTRDLEtBQUVHLENBQUY7QUFBNUMsR0FiRSxDQWVGO0FBQ0EsTUFBSUEsSUFBSU4sRUFBUixFQUFZOztBQUVaO0FBQ0EsS0FBRTs7QUFFRDtBQUNBO0FBQ0EsS0FBRUksRUFBRUMsS0FBS0MsQ0FBTCxHQUFTQyxDQUFYLENBQUY7O0FBRUE7QUFDQTtBQUNBLG1CQUFLVixDQUFMLEVBQVFDLENBQVIsRUFBV0MsRUFBWCxFQUFlTyxDQUFmLEVBQWtCTCxDQUFsQixFQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCTCxDQUE3QixFQUFnQ0MsRUFBaEMsRUFBb0NPLENBQXBDO0FBRUEsR0FWRCxRQVVRLENBQUMsa0JBQUlSLENBQUosRUFBT0MsRUFBUCxFQUFXTyxDQUFYLEVBQWNMLENBQWQsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixDQVZUO0FBYUEsRUFoQ0QsUUFnQ1EsSUFoQ1I7QUFrQ0EiLCJmaWxlIjoiX2Rpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9zdWIgfSBmcm9tICcuLi9zdWInIDtcbmltcG9ydCB7IF9sdCB9IGZyb20gJy4uLy4uL2NvbXBhcmUnIDtcblxuXG4vKipcbiAqIENvbXB1dGVzIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLlxuICogPHA+XG4gKiBDb21wdXRlcyBxdW90aWVudCBhbmQgcmVtYWluZGVyIG9mIHR3byBiaWcgZW5kaWFuIGFycmF5c1xuICogdXNpbmcgbG9uZyBkaXZpc2lvbiBhbGdvcml0aG0gKHRoZSBvbmUgdGVhY2hlZCBpblxuICogZXVyb3BlYW4gcHJpbWFyeSBzY2hvb2xzKS5cbiAqXG4gKiAvIVxcIFRoaXMgYWxnb3JpdGhtIG1vZGlmaWVzIGl0cyBmaXJzdCBvcGVyYW5kLlxuICpcbiAqIEhZUCA6IHEgaXMgYXQgbGVhc3QgYXMgbGFyZ2UgYXMgclxuICogICAgICAgYiBpcyBub3QgemVyb1xuICpcbiAqIEBwYXJhbSB7aW50fSB4IHRoZSByYWRpeFxuICogQHBhcmFtIHthcnJheX0gciBkaXZpZGVuZCBhbmQgcmVtYWluZGVyXG4gKiBAcGFyYW0ge2ludH0gcmkgciBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gcmogciByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBkaXZpc29yXG4gKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuICogQHBhcmFtIHthcnJheX0gcSBxdW90aWVudCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG4gKiBAcGFyYW0ge2ludH0gcWkgcSBsZWZ0XG4gKi9cblxuLy8gLyFcXCBUaGVyZSBhcmUgaW1wbGljaXQgaHlwb3RoZXNlc1xuLy8gICAgIG1hZGUgb24gdGhlIHNpemUgb2YgdGhlIG9wZXJhbmRzLlxuLy8gICAgIFNob3VsZCBjbGFyaWZ5LlxuXG5leHBvcnQgZnVuY3Rpb24gX2RpdiAoIHggLCByICwgcmkgLCByaiAsIGIgLCBiaSAsIGJqICwgcSAsIHFpICkge1xuXG5cdHZhciBrLCB0ID0gcmkgKyAxO1xuXG5cdGRvIHtcblxuXHRcdC8vIHRyaW0gbGVhZGluZyB6ZXJvc1xuXHRcdC8vICAgICAtIG1heWJlIGNvdWxkIHRyeSB0byBwdXQgdGhpcyBwcm9jZWR1cmUgaW5zaWRlIHRoZSBfc3ViIGxvb3Bcblx0XHQvLyAgICAgLSBvciBhc3N1bWUgdGhhdCB0aGUgbnVtYmVyIGlzIHRyaW1lZCBhdCB0aGUgYmVnaW5pbmdcblx0XHQvLyAgICAgICBhbmQgcHV0IHRoaXMgc3RhdGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG1haW4gbG9vcFxuXHRcdHdoaWxlIChyaSA8IHJqICYmIHJbcmldID09PSAwKSArK3JpO1xuXG5cdFx0Ly8gc2VhcmNoIGZvciBhIHJlbWFpbmRlciBibG9jayBpbnRlcnZhbFxuXHRcdC8vIGdyZWF0ZXIgdGhhbiB0aGUgZGl2aXNvclxuXHRcdC8vICAgICAtIG1heWJlIGNvdWxkIHRyeSBiaW5hcnkgc2VhcmNoIG9uIHRoZSBfbHQgZnVuY3Rpb25cblx0XHQvLyAgICAgZm9yIGFub3RoZXIgaW1wbGVtZW50YXRpb25cblx0XHRrID0gcmkgKyAxO1xuXHRcdHdoaWxlIChrIDw9IHJqICYmIF9sdChyLCByaSwgaywgYiwgYmksIGJqKSkgKytrO1xuXG5cdFx0Ly8gcmVtYWluZGVyIHNtYWxsZXIgdGhhbiBkaXZpc29yIC0tPiBlbmRcblx0XHRpZiAoayA+IHJqKSBicmVhaztcblxuXHRcdC8vIGRpdmlkZSBjdXJyZW50IGJsb2NrIGludGVydmFsIGJ5IHF1b3RpZW50XG5cdFx0ZG97XG5cblx0XHRcdC8vIGluY3JlbWVudCBxdW90aWVudCBibG9jayBjb3JyZXNwb25kaW5nXG5cdFx0XHQvLyB0byBjdXJyZW50IGxzIGJsb2NrIG9mIHJlbWFpbmRlciBpbnRlcnZhbFxuXHRcdFx0KytxW3FpICsgayAtIHRdO1xuXG5cdFx0XHQvLyBzdWJ0cmFjdCBkaXZpc29yIGZyb20gY3VycmVudCByZW1haW5kZXJcblx0XHRcdC8vIGJsb2NrIGludGVydmFsXG5cdFx0XHRfc3ViKHgsIHIsIHJpLCBrLCBiLCBiaSwgYmosIHIsIHJpLCBrKTtcblxuXHRcdH0gd2hpbGUoIV9sdChyLCByaSwgaywgYiwgYmksIGJqKSk7XG5cblxuXHR9IHdoaWxlKHRydWUpO1xuXG59XG4iXX0=