function two_sun (nums, target) {

    let i = 0, j = 0

    for (i = 0; i < nums.length; i++) {
        for (j =  i + 1; j < nums.length ; j++) {
            if(nums[i] + nums[j] === target)  return [i,j] 
        }
    }

}

console.log(two_sun([2,7,11,15,19,30], 9))