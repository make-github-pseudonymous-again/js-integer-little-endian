'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parse_t = parse_t;

/**
 * Function template for number parsing.
 * Endianess provided by the iterator function
 * iterator function must be reverse ordered
 *
 * @param {int} t to radix
 * @param {int} f from radix
 * @param {function} iter iterator function
 */

function parse_t(t, f, iter) {

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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9wYXJzZS9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZV90IiwidCIsImYiLCJpdGVyIiwieiIsImxvZyIsInMiLCJzaSIsInNqIiwiYSIsImFpIiwiYWoiLCJsZW4iLCJrIiwibiIsIk1hdGgiLCJjZWlsIiwiYmxvY2siLCJpIiwicGFyc2VJbnQiLCJzbGljZSIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLE8sR0FBQUEsTzs7QUFYaEI7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxPQUFULENBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JDLElBQXhCLEVBQTZCOztBQUVuQyxLQUFHRixLQUFLQyxDQUFSLEVBQVU7O0FBRVQsTUFBR0EsSUFBSSxFQUFQLEVBQVcsTUFBTSx3QkFBTjs7QUFFWCxNQUFJRSxJQUFJLENBQVI7QUFBQSxNQUFXQyxNQUFNSixDQUFqQjtBQUNBLFNBQU1JLE9BQU9ILENBQWIsRUFBZTtBQUNkLE9BQUlHLE1BQU1ILENBQVYsRUFBYTtBQUNiRyxVQUFPSCxDQUFQO0FBQ0EsS0FBRUUsQ0FBRjtBQUNBOztBQUVELE1BQUlDLFFBQVEsQ0FBWixFQUFlLE1BQU0sK0NBQU47O0FBRWY7QUFDQSxTQUFPLFVBQVNDLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLENBQXBCLEVBQXVCQyxFQUF2QixFQUEyQkMsRUFBM0IsRUFBOEI7QUFDcEMsT0FBSUMsTUFBTUosS0FBS0QsRUFBZjtBQUFBLE9BQW1CTSxJQUFJTCxLQUFLSixDQUE1QjtBQUFBLE9BQStCVSxJQUFJQyxLQUFLQyxJQUFMLENBQVVKLE1BQU1SLENBQWhCLENBQW5DO0FBQ0EsT0FBSWEsUUFBUSxTQUFSQSxLQUFRLENBQVNDLENBQVQsRUFBVztBQUN0QlQsTUFBRVMsQ0FBRixJQUFPQyxTQUFTYixFQUFFYyxLQUFGLENBQVFMLEtBQUtNLEdBQUwsQ0FBUyxDQUFULEVBQVlSLENBQVosQ0FBUixFQUF3QkEsSUFBSVQsQ0FBNUIsQ0FBVCxFQUF5Q0YsQ0FBekMsQ0FBUDtBQUNBVyxTQUFLVCxDQUFMO0FBQ0EsSUFIRDs7QUFLQUQsUUFBS1EsS0FBS0csQ0FBVixFQUFhSCxFQUFiLEVBQWlCTSxLQUFqQjtBQUVBLEdBVEQ7QUFXQSxFQXpCRCxNQTBCSyxNQUFNLHVCQUFOO0FBR0wiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogRnVuY3Rpb24gdGVtcGxhdGUgZm9yIG51bWJlciBwYXJzaW5nLlxuICogRW5kaWFuZXNzIHByb3ZpZGVkIGJ5IHRoZSBpdGVyYXRvciBmdW5jdGlvblxuICogaXRlcmF0b3IgZnVuY3Rpb24gbXVzdCBiZSByZXZlcnNlIG9yZGVyZWRcbiAqXG4gKiBAcGFyYW0ge2ludH0gdCB0byByYWRpeFxuICogQHBhcmFtIHtpbnR9IGYgZnJvbSByYWRpeFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlciBpdGVyYXRvciBmdW5jdGlvblxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX3QgKHQsIGYsIGl0ZXIpe1xuXG5cdGlmKHQgPj0gZil7XG5cblx0XHRpZihmID4gMzYpIHRocm93ICdmID4gMzYgbm90IGltcGxlbWVudGVkJztcblxuXHRcdHZhciB6ID0gMCwgbG9nID0gdDtcblx0XHR3aGlsZShsb2cgPj0gZil7XG5cdFx0XHRpZiAobG9nICUgZikgYnJlYWs7XG5cdFx0XHRsb2cgLz0gZjtcblx0XHRcdCsrejtcblx0XHR9XG5cblx0XHRpZiAobG9nICE9PSAxKSB0aHJvdyAnbG9nKGYpIGRvZXMgbm90IGRpdmlkZSBsb2codCkgbm90IGltcGxlbWVudGVkJztcblxuXHRcdC8vIGltbWVkaWF0ZSBsb2codCkgZGl2aWRlcyBsb2coZilcblx0XHRyZXR1cm4gZnVuY3Rpb24ocywgc2ksIHNqLCBhLCBhaSwgYWope1xuXHRcdFx0dmFyIGxlbiA9IHNqIC0gc2ksIGsgPSBzaiAtIHosIG4gPSBNYXRoLmNlaWwobGVuIC8geik7XG5cdFx0XHR2YXIgYmxvY2sgPSBmdW5jdGlvbihpKXtcblx0XHRcdFx0YVtpXSA9IHBhcnNlSW50KHMuc2xpY2UoTWF0aC5tYXgoMCwgayksIGsgKyB6KSwgZik7XG5cdFx0XHRcdGsgLT0gejtcblx0XHRcdH07XG5cblx0XHRcdGl0ZXIoYWogLSBuLCBhaiwgYmxvY2spO1xuXG5cdFx0fTtcblxuXHR9XG5cdGVsc2UgdGhyb3cgJ2YgPiB0IG5vdCBpbXBsZW1lbnRlZCc7XG5cblxufVxuIl19