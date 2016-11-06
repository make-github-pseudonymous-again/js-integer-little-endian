"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * big endian 1 block multiplication
 *
 */

var bmul53_t = exports.bmul53_t = function bmul53_t(r) {

	/**
  * Multiply two blocks, result is put in a 1 or 2 blocks big endian array.
  * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
  *
  *
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

	var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[cj - 1] = v % r;

		if (cj > ci + 1) {
			c[cj - 2] = (v - c[cj - 1]) / r;
		}
	};

	return mul;
};

/**
 * /!\ BLOCK MULTIPLICATION RESULT MUST HOLD IN THE JAVASCRIPT NUMBER TYPE (DOUBLE i.e. 53 bits)
 *
 * little endian 1 block multiplication
 *
 */

var lmul53_t = exports.lmul53_t = function lmul53_t(r) {

	/**
  * Multiply two blocks, result is put in a 1 or 2 blocks little endian array.
  * aj - ai <= 1, bj - bi <= 1, cj - ci <= 2
  *
  *
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

	var mul = function mul(a, ai, aj, b, bi, bj, c, ci, cj) {

		var v;

		// EMPTY CASE
		if (aj <= ai || bj <= bi || cj <= ci) return;

		v = a[ai] * b[bi];
		c[ci] = v % r;

		if (cj > ci + 1) {
			c[ci + 1] = (v - c[ci]) / r;
		}
	};

	return mul;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9hcml0aG1ldGljL211bC9tdWw1My5qcyJdLCJuYW1lcyI6WyJibXVsNTNfdCIsInIiLCJtdWwiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIiwiYyIsImNpIiwiY2oiLCJ2IiwibG11bDUzX3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7QUFPTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXLENBQVNDLENBQVQsRUFBVzs7QUFFbEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsS0FBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBK0JDLENBQS9CLEVBQWtDQyxFQUFsQyxFQUFzQ0MsRUFBdEMsRUFBeUM7O0FBRWxELE1BQUlDLENBQUo7O0FBRUE7QUFDQSxNQUFJUCxNQUFNRCxFQUFOLElBQVlJLE1BQU1ELEVBQWxCLElBQXdCSSxNQUFNRCxFQUFsQyxFQUFzQzs7QUFFdENFLE1BQUlULEVBQUVDLEVBQUYsSUFBUUUsRUFBRUMsRUFBRixDQUFaO0FBQ0FFLElBQUVFLEtBQUcsQ0FBTCxJQUFVQyxJQUFJWCxDQUFkOztBQUVBLE1BQUlVLEtBQUtELEtBQUssQ0FBZCxFQUFpQjtBQUNoQkQsS0FBRUUsS0FBRyxDQUFMLElBQVUsQ0FBQ0MsSUFBSUgsRUFBRUUsS0FBRyxDQUFMLENBQUwsSUFBZ0JWLENBQTFCO0FBQ0E7QUFFRCxFQWREOztBQWdCQSxRQUFPQyxHQUFQO0FBRUEsQ0FwQ007O0FBdUNQOzs7Ozs7O0FBT08sSUFBTVcsOEJBQVcsU0FBWEEsUUFBVyxDQUFTWixDQUFULEVBQVc7O0FBRWxDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlDLE1BQU0sU0FBTkEsR0FBTSxDQUFTQyxDQUFULEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxDQUFwQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxDQUEvQixFQUFrQ0MsRUFBbEMsRUFBc0NDLEVBQXRDLEVBQXlDOztBQUVsRCxNQUFJQyxDQUFKOztBQUVBO0FBQ0EsTUFBSVAsTUFBTUQsRUFBTixJQUFZSSxNQUFNRCxFQUFsQixJQUF3QkksTUFBTUQsRUFBbEMsRUFBc0M7O0FBRXRDRSxNQUFJVCxFQUFFQyxFQUFGLElBQVFFLEVBQUVDLEVBQUYsQ0FBWjtBQUNBRSxJQUFFQyxFQUFGLElBQVFFLElBQUlYLENBQVo7O0FBRUEsTUFBSVUsS0FBS0QsS0FBSyxDQUFkLEVBQWlCO0FBQ2hCRCxLQUFFQyxLQUFHLENBQUwsSUFBVSxDQUFDRSxJQUFJSCxFQUFFQyxFQUFGLENBQUwsSUFBY1QsQ0FBeEI7QUFDQTtBQUVELEVBZEQ7O0FBZ0JBLFFBQU9DLEdBQVA7QUFFQSxDQXBDTSIsImZpbGUiOiJtdWw1My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogLyFcXCBCTE9DSyBNVUxUSVBMSUNBVElPTiBSRVNVTFQgTVVTVCBIT0xEIElOIFRIRSBKQVZBU0NSSVBUIE5VTUJFUiBUWVBFIChET1VCTEUgaS5lLiA1MyBiaXRzKVxuICpcbiAqIGJpZyBlbmRpYW4gMSBibG9jayBtdWx0aXBsaWNhdGlvblxuICpcbiAqL1xuXG5leHBvcnQgY29uc3QgYm11bDUzX3QgPSBmdW5jdGlvbihyKXtcblxuXHQvKipcblx0ICogTXVsdGlwbHkgdHdvIGJsb2NrcywgcmVzdWx0IGlzIHB1dCBpbiBhIDEgb3IgMiBibG9ja3MgYmlnIGVuZGlhbiBhcnJheS5cblx0ICogYWogLSBhaSA8PSAxLCBiaiAtIGJpIDw9IDEsIGNqIC0gY2kgPD0gMlxuXHQgKlxuXHQgKlxuXHQgKiBAcGFyYW0ge2FycmF5fSBhIGZpcnN0IG9wZXJhbmRcblx0ICogQHBhcmFtIHtpbnR9IGFpIGEgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYWogYSByaWdodFxuXHQgKiBAcGFyYW0ge2FycmF5fSBiIHNlY29uZCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBiaSBiIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGJqIGIgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYyByZXN1bHQsIG11c3QgYmUgMCBpbml0aWFsaXplZFxuXHQgKiBAcGFyYW0ge2ludH0gY2kgYyBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBjaiBjIHJpZ2h0XG5cdCAqL1xuXG5cdHZhciBtdWwgPSBmdW5jdGlvbihhLCBhaSwgYWosIGIsIGJpLCBiaiwgYywgY2ksIGNqKXtcblxuXHRcdHZhciB2O1xuXG5cdFx0Ly8gRU1QVFkgQ0FTRVxuXHRcdGlmIChhaiA8PSBhaSB8fCBiaiA8PSBiaSB8fCBjaiA8PSBjaSkgcmV0dXJuO1xuXG5cdFx0diA9IGFbYWldICogYltiaV07XG5cdFx0Y1tjai0xXSA9IHYgJSByO1xuXG5cdFx0aWYgKGNqID4gY2kgKyAxKSB7XG5cdFx0XHRjW2NqLTJdID0gKHYgLSBjW2NqLTFdKSAvIHI7XG5cdFx0fVxuXG5cdH07XG5cblx0cmV0dXJuIG11bDtcblxufTtcblxuXG4vKipcbiAqIC8hXFwgQkxPQ0sgTVVMVElQTElDQVRJT04gUkVTVUxUIE1VU1QgSE9MRCBJTiBUSEUgSkFWQVNDUklQVCBOVU1CRVIgVFlQRSAoRE9VQkxFIGkuZS4gNTMgYml0cylcbiAqXG4gKiBsaXR0bGUgZW5kaWFuIDEgYmxvY2sgbXVsdGlwbGljYXRpb25cbiAqXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxtdWw1M190ID0gZnVuY3Rpb24ocil7XG5cblx0LyoqXG5cdCAqIE11bHRpcGx5IHR3byBibG9ja3MsIHJlc3VsdCBpcyBwdXQgaW4gYSAxIG9yIDIgYmxvY2tzIGxpdHRsZSBlbmRpYW4gYXJyYXkuXG5cdCAqIGFqIC0gYWkgPD0gMSwgYmogLSBiaSA8PSAxLCBjaiAtIGNpIDw9IDJcblx0ICpcblx0ICpcblx0ICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtpbnR9IGNpIGMgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gY2ogYyByaWdodFxuXHQgKi9cblxuXHR2YXIgbXVsID0gZnVuY3Rpb24oYSwgYWksIGFqLCBiLCBiaSwgYmosIGMsIGNpLCBjail7XG5cblx0XHR2YXIgdjtcblxuXHRcdC8vIEVNUFRZIENBU0Vcblx0XHRpZiAoYWogPD0gYWkgfHwgYmogPD0gYmkgfHwgY2ogPD0gY2kpIHJldHVybjtcblxuXHRcdHYgPSBhW2FpXSAqIGJbYmldO1xuXHRcdGNbY2ldID0gdiAlIHI7XG5cblx0XHRpZiAoY2ogPiBjaSArIDEpIHtcblx0XHRcdGNbY2krMV0gPSAodiAtIGNbY2ldKSAvIHI7XG5cdFx0fVxuXG5cdH07XG5cblx0cmV0dXJuIG11bDtcblxufTtcbiJdfQ==