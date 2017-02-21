"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bcmp_t = exports.bcmp_t = function bcmp_t() {

	/**
  * Compares two big endian arrays, |a| >= |b|
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  *
  * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
  */

	return function (a, ai, aj, b, bi, bj) {

		var tmp = aj - bj + bi;

		for (; ai < tmp; ++ai) {
			if (a[ai] > 0) return 1;
		} // same size aj - ai === bj - bi
		for (; ai < aj; ++ai, ++bi) {
			if (a[ai] > b[bi]) return 1;
			if (a[ai] < b[bi]) return -1;
		}

		return 0;
	};
};

var lcmp_t = exports.lcmp_t = function lcmp_t() {

	/**
  * Compares two little endian arrays, |a| >= |b|
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  *
  * @return {int} 1 if a > b; 0 if a = b; -1 otherwise.
  */

	return function (a, ai, aj, b, bi, bj) {

		var tmp = ai + bj - bi;

		--aj;--bj;

		for (; aj >= tmp; --aj) {
			if (a[aj] > 0) return 1;
		} // same size aj - ai === bj - bi
		for (; aj >= ai; --aj, --bj) {
			if (a[aj] > b[bj]) return 1;
			if (a[aj] < b[bj]) return -1;
		}

		return 0;
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2NtcC5qcyJdLCJuYW1lcyI6WyJiY21wX3QiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwidG1wIiwibGNtcF90Il0sIm1hcHBpbmdzIjoiOzs7OztBQUNPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsR0FBVTs7QUFHL0I7Ozs7Ozs7Ozs7Ozs7QUFhQSxRQUFPLFVBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7O0FBRXBDLE1BQUlDLE1BQU1KLEtBQUtHLEVBQUwsR0FBVUQsRUFBcEI7O0FBRUEsU0FBT0gsS0FBS0ssR0FBWixFQUFpQixFQUFFTCxFQUFuQjtBQUNDLE9BQUlELEVBQUVDLEVBQUYsSUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQO0FBRGhCLEdBSm9DLENBUXBDO0FBQ0EsU0FBT0EsS0FBS0MsRUFBWixFQUFnQixFQUFFRCxFQUFGLEVBQU0sRUFBRUcsRUFBeEIsRUFBNEI7QUFDM0IsT0FBSUosRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLE9BQUlKLEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBLEVBZkQ7QUFpQkEsQ0FqQ007O0FBbUNBLElBQU1HLDBCQUFTLFNBQVRBLE1BQVMsR0FBVTs7QUFFL0I7Ozs7Ozs7Ozs7Ozs7QUFhQSxRQUFPLFVBQVNQLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7O0FBRXBDLE1BQUlDLE1BQU1MLEtBQUtJLEVBQUwsR0FBVUQsRUFBcEI7O0FBRUEsSUFBRUYsRUFBRixDQUFNLEVBQUVHLEVBQUY7O0FBRU4sU0FBT0gsTUFBTUksR0FBYixFQUFrQixFQUFFSixFQUFwQjtBQUNDLE9BQUlGLEVBQUVFLEVBQUYsSUFBUSxDQUFaLEVBQWUsT0FBTyxDQUFQO0FBRGhCLEdBTm9DLENBVXBDO0FBQ0EsU0FBT0EsTUFBTUQsRUFBYixFQUFpQixFQUFFQyxFQUFGLEVBQU0sRUFBRUcsRUFBekIsRUFBNkI7QUFDNUIsT0FBSUwsRUFBRUUsRUFBRixJQUFRQyxFQUFFRSxFQUFGLENBQVosRUFBbUIsT0FBUSxDQUFSO0FBQ25CLE9BQUlMLEVBQUVFLEVBQUYsSUFBUUMsRUFBRUUsRUFBRixDQUFaLEVBQW1CLE9BQU8sQ0FBQyxDQUFSO0FBQ25COztBQUVELFNBQU8sQ0FBUDtBQUNBLEVBakJEO0FBa0JBLENBakNNIiwiZmlsZSI6ImNtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGJjbXBfdCA9IGZ1bmN0aW9uKCl7XG5cblxuXHQvKipcblx0ICogQ29tcGFyZXMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLCB8YXwgPj0gfGJ8XG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBhaiBhIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcblx0ICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtpbnR9IDEgaWYgYSA+IGI7IDAgaWYgYSA9IGI7IC0xIG90aGVyd2lzZS5cblx0ICovXG5cblx0cmV0dXJuIGZ1bmN0aW9uKGEsIGFpLCBhaiwgYiwgYmksIGJqKXtcblxuXHRcdHZhciB0bXAgPSBhaiAtIGJqICsgYmk7XG5cblx0XHRmb3IgKDsgYWkgPCB0bXA7ICsrYWkpXG5cdFx0XHRpZiAoYVthaV0gPiAwKSByZXR1cm4gMTtcblxuXG5cdFx0Ly8gc2FtZSBzaXplIGFqIC0gYWkgPT09IGJqIC0gYmlcblx0XHRmb3IgKDsgYWkgPCBhajsgKythaSwgKytiaSkge1xuXHRcdFx0aWYgKGFbYWldID4gYltiaV0pIHJldHVybiAgMTtcblx0XHRcdGlmIChhW2FpXSA8IGJbYmldKSByZXR1cm4gLTE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cbn07XG5cbmV4cG9ydCBjb25zdCBsY21wX3QgPSBmdW5jdGlvbigpe1xuXG5cdC8qKlxuXHQgKiBDb21wYXJlcyB0d28gbGl0dGxlIGVuZGlhbiBhcnJheXMsIHxhfCA+PSB8Ynxcblx0ICpcblx0ICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqXG5cdCAqIEByZXR1cm4ge2ludH0gMSBpZiBhID4gYjsgMCBpZiBhID0gYjsgLTEgb3RoZXJ3aXNlLlxuXHQgKi9cblxuXHRyZXR1cm4gZnVuY3Rpb24oYSwgYWksIGFqLCBiLCBiaSwgYmope1xuXG5cdFx0dmFyIHRtcCA9IGFpICsgYmogLSBiaTtcblxuXHRcdC0tYWo7IC0tYmo7XG5cblx0XHRmb3IgKDsgYWogPj0gdG1wOyAtLWFqKVxuXHRcdFx0aWYgKGFbYWpdID4gMCkgcmV0dXJuIDE7XG5cblxuXHRcdC8vIHNhbWUgc2l6ZSBhaiAtIGFpID09PSBiaiAtIGJpXG5cdFx0Zm9yICg7IGFqID49IGFpOyAtLWFqLCAtLWJqKSB7XG5cdFx0XHRpZiAoYVthal0gPiBiW2JqXSkgcmV0dXJuICAxO1xuXHRcdFx0aWYgKGFbYWpdIDwgYltial0pIHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblx0fTtcbn07XG4iXX0=