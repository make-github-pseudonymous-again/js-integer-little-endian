"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bdiv_t = exports.bdiv_t = function bdiv_t(lt, sub) {

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

	var div = function div(r, ri, rj, b, bi, bj, q, qi) {
		var k,
		    t = ri + 1;

		do {

			// trim leading zeros
			//     - maybe could try to put this procedure inside the sub loop
			//     - or assume that the number is trimed at the begining
			//       and put this statement at the end of the main loop
			while (ri < rj && r[ri] === 0) {
				++ri;
			} // search for a remainder block interval
			// greater than the divisor
			//     - maybe could try binary search on the lt function
			//     for another implementation
			k = ri + 1;
			while (k <= rj && lt(r, ri, k, b, bi, bj)) {
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
				sub(r, ri, k, b, bi, bj, r, ri, k);
			} while (!lt(r, ri, k, b, bi, bj));
		} while (true);
	};

	return div;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9hcml0aG1ldGljL2Rpdi9kaXYuanMiXSwibmFtZXMiOlsiYmRpdl90IiwibHQiLCJzdWIiLCJkaXYiLCJyIiwicmkiLCJyaiIsImIiLCJiaSIsImJqIiwicSIsInFpIiwiayIsInQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBR08sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUyxDQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBaUI7O0FBRXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTs7QUFFQSxLQUFJQyxNQUFNLFNBQU5BLEdBQU0sQ0FBU0MsQ0FBVCxFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQkMsQ0FBcEIsRUFBdUJDLEVBQXZCLEVBQTJCQyxFQUEzQixFQUErQkMsQ0FBL0IsRUFBa0NDLEVBQWxDLEVBQXFDO0FBQzlDLE1BQUlDLENBQUo7QUFBQSxNQUFPQyxJQUFJUixLQUFLLENBQWhCOztBQUVBLEtBQUc7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFPQSxLQUFLQyxFQUFMLElBQVdGLEVBQUVDLEVBQUYsTUFBVSxDQUE1QjtBQUErQixNQUFFQSxFQUFGO0FBQS9CLElBTkUsQ0FRRjtBQUNBO0FBQ0E7QUFDQTtBQUNBTyxPQUFJUCxLQUFLLENBQVQ7QUFDQSxVQUFPTyxLQUFLTixFQUFMLElBQVdMLEdBQUdHLENBQUgsRUFBTUMsRUFBTixFQUFVTyxDQUFWLEVBQWFMLENBQWIsRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQUFsQjtBQUEyQyxNQUFFRyxDQUFGO0FBQTNDLElBYkUsQ0FlRjtBQUNBLE9BQUlBLElBQUlOLEVBQVIsRUFBWTs7QUFFWjtBQUNBLE1BQUU7O0FBRUQ7QUFDQTtBQUNBLE1BQUVJLEVBQUVDLEtBQUtDLENBQUwsR0FBU0MsQ0FBWCxDQUFGOztBQUVBO0FBQ0E7QUFDQVgsUUFBSUUsQ0FBSixFQUFPQyxFQUFQLEVBQVdPLENBQVgsRUFBY0wsQ0FBZCxFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLEVBQXlCTCxDQUF6QixFQUE0QkMsRUFBNUIsRUFBZ0NPLENBQWhDO0FBRUEsSUFWRCxRQVVRLENBQUNYLEdBQUdHLENBQUgsRUFBTUMsRUFBTixFQUFVTyxDQUFWLEVBQWFMLENBQWIsRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQVZUO0FBYUEsR0FoQ0QsUUFnQ1EsSUFoQ1I7QUFrQ0EsRUFyQ0Q7O0FBdUNBLFFBQU9OLEdBQVA7QUFFQSxDQXJFTSIsImZpbGUiOiJkaXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgYmRpdl90ID0gZnVuY3Rpb24obHQsIHN1Yil7XG5cblx0LyoqXG5cdCAqIENvbXB1dGVzIHF1b3RpZW50IGFuZCByZW1haW5kZXIgb2YgdHdvIGJpZyBlbmRpYW4gYXJyYXlzLlxuXHQgKiA8cD5cblx0ICogQ29tcHV0ZXMgcXVvdGllbnQgYW5kIHJlbWFpbmRlciBvZiB0d28gYmlnIGVuZGlhbiBhcnJheXNcblx0ICogdXNpbmcgbG9uZyBkaXZpc2lvbiBhbGdvcml0aG0gKHRoZSBvbmUgdGVhY2hlZCBpblxuXHQgKiBldXJvcGVhbiBwcmltYXJ5IHNjaG9vbHMpLlxuXHQgKlxuXHQgKiAvIVxcIFRoaXMgYWxnb3JpdGhtIG1vZGlmaWVzIGl0cyBmaXJzdCBvcGVyYW5kLlxuXHQgKlxuXHQgKiBIWVAgOiBxIGlzIGF0IGxlYXN0IGFzIGxhcmdlIGFzIHJcblx0ICogICAgICAgYiBpcyBub3QgemVyb1xuXHQgKlxuXHQgKiBAcGFyYW0ge2FycmF5fSByIGRpdmlkZW5kIGFuZCByZW1haW5kZXJcblx0ICogQHBhcmFtIHtpbnR9IHJpIHIgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gcmogciByaWdodFxuXHQgKiBAcGFyYW0ge2FycmF5fSBiIGRpdmlzb3Jcblx0ICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuXHQgKiBAcGFyYW0ge2FycmF5fSBxIHF1b3RpZW50LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtpbnR9IHFpIHEgbGVmdFxuXHQgKi9cblxuXHQvLyAvIVxcIFRoZXJlIGFyZSBpbXBsaWNpdCBoeXBvdGhlc2VzXG5cdC8vICAgICBtYWRlIG9uIHRoZSBzaXplIG9mIHRoZSBvcGVyYW5kcy5cblx0Ly8gICAgIFNob3VsZCBjbGFyaWZ5LlxuXG5cdHZhciBkaXYgPSBmdW5jdGlvbihyLCByaSwgcmosIGIsIGJpLCBiaiwgcSwgcWkpe1xuXHRcdHZhciBrLCB0ID0gcmkgKyAxO1xuXG5cdFx0ZG8ge1xuXG5cdFx0XHQvLyB0cmltIGxlYWRpbmcgemVyb3Ncblx0XHRcdC8vICAgICAtIG1heWJlIGNvdWxkIHRyeSB0byBwdXQgdGhpcyBwcm9jZWR1cmUgaW5zaWRlIHRoZSBzdWIgbG9vcFxuXHRcdFx0Ly8gICAgIC0gb3IgYXNzdW1lIHRoYXQgdGhlIG51bWJlciBpcyB0cmltZWQgYXQgdGhlIGJlZ2luaW5nXG5cdFx0XHQvLyAgICAgICBhbmQgcHV0IHRoaXMgc3RhdGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG1haW4gbG9vcFxuXHRcdFx0d2hpbGUgKHJpIDwgcmogJiYgcltyaV0gPT09IDApICsrcmk7XG5cblx0XHRcdC8vIHNlYXJjaCBmb3IgYSByZW1haW5kZXIgYmxvY2sgaW50ZXJ2YWxcblx0XHRcdC8vIGdyZWF0ZXIgdGhhbiB0aGUgZGl2aXNvclxuXHRcdFx0Ly8gICAgIC0gbWF5YmUgY291bGQgdHJ5IGJpbmFyeSBzZWFyY2ggb24gdGhlIGx0IGZ1bmN0aW9uXG5cdFx0XHQvLyAgICAgZm9yIGFub3RoZXIgaW1wbGVtZW50YXRpb25cblx0XHRcdGsgPSByaSArIDE7XG5cdFx0XHR3aGlsZSAoayA8PSByaiAmJiBsdChyLCByaSwgaywgYiwgYmksIGJqKSkgKytrO1xuXG5cdFx0XHQvLyByZW1haW5kZXIgc21hbGxlciB0aGFuIGRpdmlzb3IgLS0+IGVuZFxuXHRcdFx0aWYgKGsgPiByaikgYnJlYWs7XG5cblx0XHRcdC8vIGRpdmlkZSBjdXJyZW50IGJsb2NrIGludGVydmFsIGJ5IHF1b3RpZW50XG5cdFx0XHRkb3tcblxuXHRcdFx0XHQvLyBpbmNyZW1lbnQgcXVvdGllbnQgYmxvY2sgY29ycmVzcG9uZGluZ1xuXHRcdFx0XHQvLyB0byBjdXJyZW50IGxzIGJsb2NrIG9mIHJlbWFpbmRlciBpbnRlcnZhbFxuXHRcdFx0XHQrK3FbcWkgKyBrIC0gdF07XG5cblx0XHRcdFx0Ly8gc3VidHJhY3QgZGl2aXNvciBmcm9tIGN1cnJlbnQgcmVtYWluZGVyXG5cdFx0XHRcdC8vIGJsb2NrIGludGVydmFsXG5cdFx0XHRcdHN1YihyLCByaSwgaywgYiwgYmksIGJqLCByLCByaSwgayk7XG5cblx0XHRcdH0gd2hpbGUoIWx0KHIsIHJpLCBrLCBiLCBiaSwgYmopKTtcblxuXG5cdFx0fSB3aGlsZSh0cnVlKTtcblxuXHR9O1xuXG5cdHJldHVybiBkaXY7XG5cbn07XG4iXX0=