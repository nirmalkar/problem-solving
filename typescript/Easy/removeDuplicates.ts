// Given an integer array nums sorted in increasing order, remove the duplicates in place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must place the result in the first part of the array and return the new length of the array.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1: input: nums = [1, 1, 2]
// output: 2, nums = [1, 2]
// Example 2: input: nums = [0, 0, 1, 1, 1, 1, 2, 3, 4]
// output: 5, nums = [0, 1, 2, 3, 4]

const removeDuplicates = (nums: number[]): number => {
    if (!nums) return 0
    let unique_index = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[unique_index]) {
            unique_index += 1
            nums[unique_index] = nums[i]
        }
    }
    return unique_index + 1
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
