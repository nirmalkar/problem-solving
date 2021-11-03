var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1.length && !nums2.length) return 0
    const mergedArr = nums1.concat(nums2)

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
