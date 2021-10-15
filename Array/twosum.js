/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

// order of n^2
const twoSum = function (nums, target) {
    let outputArr = []
    nums.forEach((ele, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            if (ele + nums[j] === target) {
                outputArr = [i, j]
            }
            if (outputArr.length) {
                return
            }
        }
    })
    return outputArr
}
const sumIdx = twoSum([3, 2, 3, 4], 6)
console.log(sumIdx)

// order of n
const twoSumOptimized = (nums, target) => {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const otherNum = target - nums[i]
        if (otherNum in obj) {
            return [obj[otherNum], i]
        }
        obj[nums[i]] = i
    }
}

const sumIdxOpt = twoSumOptimized([3, 2, 3, 4], 6)
console.log(sumIdxOpt)
