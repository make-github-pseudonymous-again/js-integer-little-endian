"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is not equal to _b_.
 */

var ne_t = exports.ne_t = function ne_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) !== 0;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL25lLmpzIl0sIm5hbWVzIjpbIm5lX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixNQUE4QixDQUFyQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6Im5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIG5vdCBlcXVhbCB0byBfYl8uXG4gKi9cblxuZXhwb3J0IGNvbnN0IG5lX3QgPSBmdW5jdGlvbihjbXApe1xuXHRyZXR1cm4gZnVuY3Rpb24gKGEsIGFpLCBhaiwgYiwgYmksIGJqKSB7XG5cdFx0cmV0dXJuIGNtcChhLCBhaSwgYWosIGIsIGJpLCBiaikgIT09IDA7XG5cdH07XG59O1xuIl19