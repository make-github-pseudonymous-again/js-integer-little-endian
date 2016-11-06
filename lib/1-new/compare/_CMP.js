"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * @return {int} result 1 if a > b; 0 if a = b; -1 otherwise.
 */

var _CMP = exports._CMP = function _CMP(a, ai, aj, b, bi, bj) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8xLW5ldy9jb21wYXJlL19DTVAuanMiXSwibmFtZXMiOlsiX0NNUCIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBYU8sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxDQUFULEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxDQUFwQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQThCOztBQUVqRCxNQUFJQyxNQUFNSixLQUFLRyxFQUFMLEdBQVVELEVBQXBCOztBQUVBLFNBQU9ILEtBQUtLLEdBQVosRUFBaUIsRUFBRUwsRUFBbkI7QUFDQyxRQUFJRCxFQUFFQyxFQUFGLElBQVEsQ0FBWixFQUFlLE9BQU8sQ0FBUDtBQURoQixHQUppRCxDQU9qRDtBQUNBLFNBQU9BLEtBQUtDLEVBQVosRUFBZ0IsRUFBRUQsRUFBRixFQUFNLEVBQUVHLEVBQXhCLEVBQTRCO0FBQzNCLFFBQUlKLEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaLEVBQW1CLE9BQVEsQ0FBUjtBQUNuQixRQUFJSixFQUFFQyxFQUFGLElBQVFFLEVBQUVDLEVBQUYsQ0FBWixFQUFtQixPQUFPLENBQUMsQ0FBUjtBQUNuQjs7QUFFRCxTQUFPLENBQVA7QUFDQSxDQWRNIiwiZmlsZSI6Il9DTVAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29tcGFyZXMgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLCB8YXwgPj0gfGJ8XG4gKlxuICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG4gKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcbiAqXG4gKiBAcmV0dXJuIHtpbnR9IHJlc3VsdCAxIGlmIGEgPiBiOyAwIGlmIGEgPSBiOyAtMSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGNvbnN0IF9DTVAgPSBmdW5jdGlvbihhLCBhaSwgYWosIGIsIGJpLCBiail7XG5cblx0dmFyIHRtcCA9IGFqIC0gYmogKyBiaTtcblxuXHRmb3IgKDsgYWkgPCB0bXA7ICsrYWkpXG5cdFx0aWYgKGFbYWldID4gMCkgcmV0dXJuIDE7XG5cblx0Ly8gc2FtZSBzaXplIGFqIC0gYWkgPT09IGJqIC0gYmlcblx0Zm9yICg7IGFpIDwgYWo7ICsrYWksICsrYmkpIHtcblx0XHRpZiAoYVthaV0gPiBiW2JpXSkgcmV0dXJuICAxO1xuXHRcdGlmIChhW2FpXSA8IGJbYmldKSByZXR1cm4gLTE7XG5cdH1cblxuXHRyZXR1cm4gMDtcbn07XG4iXX0=