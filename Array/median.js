/**
 * Median of Two Sorted Arrays
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */

var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1.length && !nums2.length) return 0
    const mergedArr = nums1.concat(nums2)

    //sorting array here
    for (let i = 0; i < mergedArr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < mergedArr.length; j++) {
            if (mergedArr[j] < mergedArr[lowest]) {
                lowest = j
            }
            if (i !== lowest) {
                const temp = mergedArr[i]
                mergedArr[i] = mergedArr[lowest]
                mergedArr[lowest] = temp
            }
        }
    }

    if (mergedArr.length === 1) return mergedArr[0]
    if (mergedArr.length % 2 === 0) {
        const sum =
            mergedArr[mergedArr.length / 2 - 1] +
            mergedArr[mergedArr.length / 2]
        return sum / 2
    } else {
        return mergedArr[Math.ceil(mergedArr.length / 2) - 1]
    }
}

const median = findMedianSortedArrays([2, 1], [4, 3])

console.log(median)
