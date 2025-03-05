/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let i = 0
    let j = numbers.length - 1
    let sum

    while( i < j) {

        sum = numbers[i] + numbers[j]

        if(sum == target)
            return [i+1, j+1]

        if(sum > target) 
            j--
        
        if(sum < target)
            i++

    }

    return []
    
};
