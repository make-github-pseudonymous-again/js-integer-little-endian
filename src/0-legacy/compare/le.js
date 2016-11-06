

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is less or equal to _b_.
 */

export const le_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) <= 0;
	};
};
