function containsNearbyDuplicate (nums, k) {

    const hash_map = {}

    for (let index = 0; index < nums.length; index++) {
    
        if(Array.isArray(hash_map[nums[index]])) {
            hash_map[nums[index]].push(index)
        }
        else {
            hash_map[nums[index]] = [index]
        }

        if(hash_map[nums[index]].length == 2) {

            let i = hash_map[nums[index]][0]
            let j = hash_map[nums[index]][1]
            
            if(Math.abs(i - j) <= k) 
                return true
            else 
                hash_map[nums[index]] = [index]
        }
        
    }
    
    return false
    
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))