/**
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 *
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 */

function firstMissingPositive(arr) {
    const nums = Array.from(Array(arr.length + 1).keys())
    nums.shift()
    arr.sort((a, b) => a - b)
    for (i in arr) {
        if (!arr.includes(nums[i])) {
            return nums[i]
        }
    }
}

console.log(firstMissingPositive([7, 8, 9, 11, 12]))
