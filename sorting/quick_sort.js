function quickSort (nums, left, right) {
    if (left < right) {
        let pi = partition(nums, left, right)
        quickSort(nums, left, pi-1)
        quickSort(nums, pi+1, right)
    }
}

function partition (nums, left, right) {

    let pivot = nums[right]

    let i = left-1

    for (let j = left; j < right; j++) {
        
        if(nums[j] < pivot) {
            i++
            let aux = nums[i]
            nums[i] = nums[j]
            nums[j] = aux
        }
    }

    let aux2 = nums[i+1]
    nums[i+1] = nums[right]
    nums[right] = aux2

    return i+1

}

const array = [3,1,9,5,7,0,2,4,6,8]

console.log(array)
quickSort (array, 0, array.length - 1)
console.log(array)
