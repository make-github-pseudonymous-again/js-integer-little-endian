'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

/**
 * Function template for number parsing.
 * Endianess provided by the iterator function
 * iterator function must be reverse ordered
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 */

var parse_t = exports.parse_t = function parse_t(t, f, iter) {

	if (t >= f) {

		if (f > 36) throw 'f > 36 not implemented';

		var z = 0,
		    log = t;
		while (log >= f) {
			if (log % f) break;
			log /= f;
			++z;
		}

		if (log !== 1) throw 'log(f) does not divide log(t) not implemented';

		// immediate log(t) divides log(f)
		return function (s, si, sj, a, ai, aj) {
			var len = sj - si,
			    k = sj - z,
			    n = Math.ceil(len / z);
			var block = function block(i) {
				a[i] = parseInt(s.slice(Math.max(0, k), k + z), f);
				k -= z;
			};

			iter(aj - n, aj, block);
		};
	} else throw 'f > t not implemented';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9wYXJzZS9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZV90IiwidCIsImYiLCJpdGVyIiwieiIsImxvZyIsInMiLCJzaSIsInNqIiwiYSIsImFpIiwiYWoiLCJsZW4iLCJrIiwibiIsIk1hdGgiLCJjZWlsIiwiYmxvY2siLCJpIiwicGFyc2VJbnQiLCJzbGljZSIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFXTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLENBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxJQUFmLEVBQW9COztBQUUxQyxLQUFHRixLQUFLQyxDQUFSLEVBQVU7O0FBRVQsTUFBR0EsSUFBSSxFQUFQLEVBQVcsTUFBTSx3QkFBTjs7QUFFWCxNQUFJRSxJQUFJLENBQVI7QUFBQSxNQUFXQyxNQUFNSixDQUFqQjtBQUNBLFNBQU1JLE9BQU9ILENBQWIsRUFBZTtBQUNkLE9BQUlHLE1BQU1ILENBQVYsRUFBYTtBQUNiRyxVQUFPSCxDQUFQO0FBQ0EsS0FBRUUsQ0FBRjtBQUNBOztBQUVELE1BQUlDLFFBQVEsQ0FBWixFQUFlLE1BQU0sK0NBQU47O0FBRWY7QUFDQSxTQUFPLFVBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7QUFDcEMsT0FBSUMsTUFBTUosS0FBS0QsRUFBZjtBQUFBLE9BQW1CTSxJQUFJTCxLQUFLSixDQUE1QjtBQUFBLE9BQStCVSxJQUFJQyxLQUFLQyxJQUFMLENBQVVKLE1BQU1SLENBQWhCLENBQW5DO0FBQ0EsT0FBSWEsUUFBUSxTQUFSQSxLQUFRLENBQVNDLENBQVQsRUFBVztBQUN0QlQsTUFBRVMsQ0FBRixJQUFPQyxTQUFTYixFQUFFYyxLQUFGLENBQVFMLEtBQUtNLEdBQUwsQ0FBUyxDQUFULEVBQVlSLENBQVosQ0FBUixFQUF3QkEsSUFBSVQsQ0FBNUIsQ0FBVCxFQUF5Q0YsQ0FBekMsQ0FBUDtBQUNBVyxTQUFLVCxDQUFMO0FBQ0EsSUFIRDs7QUFLQUQsUUFBS1EsS0FBS0csQ0FBVixFQUFhSCxFQUFiLEVBQWlCTSxLQUFqQjtBQUVBLEdBVEQ7QUFXQSxFQXpCRCxNQTBCSyxNQUFNLHVCQUFOO0FBR0wsQ0EvQk0iLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRnVuY3Rpb24gdGVtcGxhdGUgZm9yIG51bWJlciBwYXJzaW5nLlxuICogRW5kaWFuZXNzIHByb3ZpZGVkIGJ5IHRoZSBpdGVyYXRvciBmdW5jdGlvblxuICogaXRlcmF0b3IgZnVuY3Rpb24gbXVzdCBiZSByZXZlcnNlIG9yZGVyZWRcbiAqXG4gKiBAcGFyYW0ge2ludH0gZiBmcm9tIHJhZGl4XG4gKiBAcGFyYW0ge2ludH0gdCB0byByYWRpeFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlciBpdGVyYXRvciBmdW5jdGlvblxuICovXG5cblxuZXhwb3J0IGNvbnN0IHBhcnNlX3QgPSBmdW5jdGlvbih0LCBmLCBpdGVyKXtcblxuXHRpZih0ID49IGYpe1xuXG5cdFx0aWYoZiA+IDM2KSB0aHJvdyAnZiA+IDM2IG5vdCBpbXBsZW1lbnRlZCc7XG5cblx0XHR2YXIgeiA9IDAsIGxvZyA9IHQ7XG5cdFx0d2hpbGUobG9nID49IGYpe1xuXHRcdFx0aWYgKGxvZyAlIGYpIGJyZWFrO1xuXHRcdFx0bG9nIC89IGY7XG5cdFx0XHQrK3o7XG5cdFx0fVxuXG5cdFx0aWYgKGxvZyAhPT0gMSkgdGhyb3cgJ2xvZyhmKSBkb2VzIG5vdCBkaXZpZGUgbG9nKHQpIG5vdCBpbXBsZW1lbnRlZCc7XG5cblx0XHQvLyBpbW1lZGlhdGUgbG9nKHQpIGRpdmlkZXMgbG9nKGYpXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHMsIHNpLCBzaiwgYSwgYWksIGFqKXtcblx0XHRcdHZhciBsZW4gPSBzaiAtIHNpLCBrID0gc2ogLSB6LCBuID0gTWF0aC5jZWlsKGxlbiAvIHopO1xuXHRcdFx0dmFyIGJsb2NrID0gZnVuY3Rpb24oaSl7XG5cdFx0XHRcdGFbaV0gPSBwYXJzZUludChzLnNsaWNlKE1hdGgubWF4KDAsIGspLCBrICsgeiksIGYpO1xuXHRcdFx0XHRrIC09IHo7XG5cdFx0XHR9O1xuXG5cdFx0XHRpdGVyKGFqIC0gbiwgYWosIGJsb2NrKTtcblxuXHRcdH07XG5cblx0fVxuXHRlbHNlIHRocm93ICdmID4gdCBub3QgaW1wbGVtZW50ZWQnO1xuXG5cbn07XG4iXX0=