"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is equal to _b_.
 */

var eq_t = exports.eq_t = function eq_t(cmp) {
  return function (a, ai, aj, b, bi, bj) {
    return cmp(a, ai, aj, b, bi, bj) === 0;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9jb21wYXJlL2VxLmpzIl0sIm5hbWVzIjpbImVxX3QiLCJjbXAiLCJhIiwiYWkiLCJhaiIsImIiLCJiaSIsImJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFTQyxHQUFULEVBQWE7QUFDaEMsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxDQUFyQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU9OLElBQUlDLENBQUosRUFBT0MsRUFBUCxFQUFXQyxFQUFYLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixNQUE4QixDQUFyQztBQUNBLEdBRkQ7QUFHQSxDQUpNIiwiZmlsZSI6ImVxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogV3JhcHBlciBmb3IgYSBjb21wYXJpc29uIG9wZXJhdG9yIHRoYXQgcmV0dXJucyB0cnVlIGlmZlxuICogX2FfIGlzIGVxdWFsIHRvIF9iXy5cbiAqL1xuXG5leHBvcnQgY29uc3QgZXFfdCA9IGZ1bmN0aW9uKGNtcCl7XG5cdHJldHVybiBmdW5jdGlvbiAoYSwgYWksIGFqLCBiLCBiaSwgYmopIHtcblx0XHRyZXR1cm4gY21wKGEsIGFpLCBhaiwgYiwgYmksIGJqKSA9PT0gMDtcblx0fTtcbn07XG4iXX0=