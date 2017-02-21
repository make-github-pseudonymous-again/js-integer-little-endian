"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater than _b_.
 */

var gt_t = exports.gt_t = function gt_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) > 0;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2d0LmpzIl0sIm5hbWVzIjpbImd0X3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixJQUE0QixDQUFuQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6Imd0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIGdyZWF0ZXIgdGhhbiBfYl8uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGd0X3QgPSBmdW5jdGlvbihjbXApe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGEsIGFpLCBhaiwgYiwgYmksIGJqKSB7XG5cdFx0cmV0dXJuIGNtcChhLCBhaSwgYWosIGIsIGJpLCBiaikgPiAwO1xuXHR9O1xufTtcbiJdfQ==