"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater or equal to _b_.
 */

var ge_t = exports.ge_t = function ge_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) >= 0;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2dlLmpzIl0sIm5hbWVzIjpbImdlX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixLQUE2QixDQUFwQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6ImdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gX2JfLlxuICovXG5cbmV4cG9ydCBjb25zdCBnZV90ID0gZnVuY3Rpb24oY21wKXtcblx0cmV0dXJuIGZ1bmN0aW9uIChhLCBhaSwgYWosIGIsIGJpLCBiaikge1xuXHRcdHJldHVybiBjbXAoYSwgYWksIGFqLCBiLCBiaSwgYmopID49IDA7XG5cdH07XG59O1xuIl19