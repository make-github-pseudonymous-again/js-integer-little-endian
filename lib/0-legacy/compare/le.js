"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less or equal to _b_.
 */

var le_t = exports.le_t = function le_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) <= 0;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2xlLmpzIl0sIm5hbWVzIjpbImxlX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixLQUE2QixDQUFwQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6ImxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIGxlc3Mgb3IgZXF1YWwgdG8gX2JfLlxuICovXG5cbmV4cG9ydCBjb25zdCBsZV90ID0gZnVuY3Rpb24oY21wKXtcblx0cmV0dXJuIGZ1bmN0aW9uIChhLCBhaSwgYWosIGIsIGJpLCBiaikge1xuXHRcdHJldHVybiBjbXAoYSwgYWksIGFqLCBiLCBiaSwgYmopIDw9IDA7XG5cdH07XG59O1xuIl19