

/**
 * Wrapper for a comparison operator that returns true iff
 * _a_ is greater than _b_.
 */

export const gt_t = function(cmp){
	return function (a, ai, aj, b, bi, bj) {
		return cmp(a, ai, aj, b, bi, bj) > 0;
	};
};
