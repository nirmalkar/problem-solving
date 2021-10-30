/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

Array.prototype.contains = function (arr) {
    const arrStr = String(arr)
    for (let i = 0; i < this.length; i++) {
        if (String(this[i]) === arrStr) {
            return true
        }
    }
}

const threeSum = (nums) => {
    nums.sort((a, b) => a - b)
    const result = []
    const idxArr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const twoSum = nums[i] + nums[j]
            for (let k = j + 1; k < nums.length; k++) {
                let threeSum = twoSum + nums[k]
                if (threeSum === 0) {
                    if (!result.contains([nums[i], nums[j], nums[k]])) {
                        result.push([nums[i], nums[j], nums[k]])
                        idxArr.push([i, j, k])
                    }
                }
            }
        }
    }
    return { result, idxArr }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

/**
 * three sum Other way
 */

const threeSumOtherWay = (nums) => {
    const result = []
    const tempObj = {}
    for (let i = 0; i < nums.length - 1; i++) {
        console.log(nums[i])
        for (let j = i + 1; j < nums.length - 1; j++) {
            const twoSum = nums[i] + nums[j]
            const target = 0 - twoSum
            if (
                tempObj[target] &&
                !result.contains(
                    [...tempObj[target], target].sort((a, b) => a - b)
                )
            ) {
                result.push([...tempObj[target], target].sort((a, b) => a - b))
            }
            tempObj[target] = [nums[i], nums[j]]
        }
    }
    return { result }
}

console.log(threeSumOtherWay([-1, 0, 1, 2, -1, -4]))
