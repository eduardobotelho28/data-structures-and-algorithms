/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let lo    = 0
    let hi    = nums.length - 1
    let mid   = 0

    while (lo < hi) {

        mid = parseInt((lo+hi)/2)

        if(nums[mid] === target) 
            return mid

        else if (nums[mid] < target) 
            lo = mid+1
        
        else 
            hi = mid
        
    }

    return nums[hi] < target ? hi+1 : hi
};
