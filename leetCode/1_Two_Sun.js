/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const complement = {}

    for (let i = 0; i < nums.length; i++) {

        if( nums[i] in complement) {
            return [complement[nums[i]], i]
        }
        
        complement[target - nums[i]] = i
    }
    
};
