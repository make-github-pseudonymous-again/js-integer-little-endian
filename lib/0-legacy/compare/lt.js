"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less than _b_.
 */

var lt_t = exports.lt_t = function lt_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) < 0;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2x0LmpzIl0sIm5hbWVzIjpbImx0X3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixJQUE0QixDQUFuQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6Imx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIGxlc3MgdGhhbiBfYl8uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGx0X3QgPSBmdW5jdGlvbihjbXApe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGEsIGFpLCBhaiwgYiwgYmksIGJqKSB7XG5cdFx0cmV0dXJuIGNtcChhLCBhaSwgYWosIGIsIGJpLCBiaikgPCAwO1xuXHR9O1xufTtcbiJdfQ==