'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stringify_t = stringify_t;

/**
 * Function template for number stringification.
 * Endianess provided by the iterator function
 *
 * @param {int} f from radix
 * @param {int} t to radix
 * @param {function} iter iterator function
 * @param {function} zfill_t zero fill string function
 */

function stringify_t(f, t, iter, zfill_t) {

	if (t <= f) {

		if (t > 36) throw 't > 36 not implemented';

		var z = 0;
		while (f >= t) {
			if (f % t) break;
			f /= t;
			++z;
		}

		if (f !== 1) throw 'log(t) does not divide log(f) not implemented';

		var zfill = zfill_t(z);

		return function (a, i0, i1) {
			var s = [];
			iter(i0, i1, function (i) {
				s.push(zfill(Number(+a[i]).toString(t)));
			});
			return s.join('');
		};
	} else throw 't > f not implemented';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9zdHJpbmdpZnkvc3RyaW5naWZ5LmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeV90IiwiZiIsInQiLCJpdGVyIiwiemZpbGxfdCIsInoiLCJ6ZmlsbCIsImEiLCJpMCIsImkxIiwicyIsImkiLCJwdXNoIiwiTnVtYmVyIiwidG9TdHJpbmciLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7OztRQVlnQkEsVyxHQUFBQSxXOztBQVhoQjs7Ozs7Ozs7OztBQVdPLFNBQVNBLFdBQVQsQ0FBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QkMsSUFBNUIsRUFBa0NDLE9BQWxDLEVBQTBDOztBQUVoRCxLQUFHRixLQUFLRCxDQUFSLEVBQVU7O0FBRVQsTUFBR0MsSUFBSSxFQUFQLEVBQVcsTUFBTSx3QkFBTjs7QUFFWCxNQUFJRyxJQUFJLENBQVI7QUFDQSxTQUFNSixLQUFLQyxDQUFYLEVBQWE7QUFDWixPQUFHRCxJQUFJQyxDQUFQLEVBQVU7QUFDVkQsUUFBS0MsQ0FBTDtBQUNBLEtBQUVHLENBQUY7QUFDQTs7QUFFRCxNQUFHSixNQUFNLENBQVQsRUFBWSxNQUFNLCtDQUFOOztBQUVaLE1BQUlLLFFBQVFGLFFBQVFDLENBQVIsQ0FBWjs7QUFFQSxTQUFPLFVBQVNFLENBQVQsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEIsRUFBbUI7QUFDekIsT0FBSUMsSUFBSSxFQUFSO0FBQ0FQLFFBQUtLLEVBQUwsRUFBU0MsRUFBVCxFQUFhLFVBQVNFLENBQVQsRUFBVztBQUN2QkQsTUFBRUUsSUFBRixDQUFPTixNQUFNTyxPQUFPLENBQUNOLEVBQUVJLENBQUYsQ0FBUixFQUFjRyxRQUFkLENBQXVCWixDQUF2QixDQUFOLENBQVA7QUFDQSxJQUZEO0FBR0EsVUFBT1EsRUFBRUssSUFBRixDQUFPLEVBQVAsQ0FBUDtBQUNBLEdBTkQ7QUFRQSxFQXZCRCxNQXdCSyxNQUFNLHVCQUFOO0FBRUwiLCJmaWxlIjoic3RyaW5naWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEZ1bmN0aW9uIHRlbXBsYXRlIGZvciBudW1iZXIgc3RyaW5naWZpY2F0aW9uLlxuICogRW5kaWFuZXNzIHByb3ZpZGVkIGJ5IHRoZSBpdGVyYXRvciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7aW50fSBmIGZyb20gcmFkaXhcbiAqIEBwYXJhbSB7aW50fSB0IHRvIHJhZGl4XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB6ZmlsbF90IHplcm8gZmlsbCBzdHJpbmcgZnVuY3Rpb25cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlfdCAoZiwgdCwgaXRlciwgemZpbGxfdCl7XG5cblx0aWYodCA8PSBmKXtcblxuXHRcdGlmKHQgPiAzNikgdGhyb3cgJ3QgPiAzNiBub3QgaW1wbGVtZW50ZWQnO1xuXG5cdFx0dmFyIHogPSAwO1xuXHRcdHdoaWxlKGYgPj0gdCl7XG5cdFx0XHRpZihmICUgdCkgYnJlYWs7XG5cdFx0XHRmIC89IHQ7XG5cdFx0XHQrK3o7XG5cdFx0fVxuXG5cdFx0aWYoZiAhPT0gMSkgdGhyb3cgJ2xvZyh0KSBkb2VzIG5vdCBkaXZpZGUgbG9nKGYpIG5vdCBpbXBsZW1lbnRlZCc7XG5cblx0XHR2YXIgemZpbGwgPSB6ZmlsbF90KHopO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGEsIGkwLCBpMSl7XG5cdFx0XHR2YXIgcyA9IFtdO1xuXHRcdFx0aXRlcihpMCwgaTEsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRzLnB1c2goemZpbGwoTnVtYmVyKCthW2ldKS50b1N0cmluZyh0KSkpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcy5qb2luKCcnKTtcblx0XHR9O1xuXG5cdH1cblx0ZWxzZSB0aHJvdyAndCA+IGYgbm90IGltcGxlbWVudGVkJztcblxufVxuIl19