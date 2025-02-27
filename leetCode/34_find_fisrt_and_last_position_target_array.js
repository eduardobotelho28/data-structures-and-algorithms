/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1; // Continua procurando na esquerda
                } else {
                    left = mid + 1; // Continua procurando na direita
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return bound;
    }

    let first = findBound(true);
    let last = findBound(false);

    return [first, last];
};
