function bubbleSort (nums) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums)
        let is_sorted = true
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j+1]) {
                let aux   = nums[j]
                nums[j]   = nums[j+1]
                nums[j+1] = aux
                is_sorted = false
            }
        }
        if(is_sorted) return  
    }
}


bubbleSort([1,2,5,4,3])