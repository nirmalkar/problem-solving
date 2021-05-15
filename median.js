var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) return 0;
  const mergedArr = nums1.concat(nums2).sort((a, b) => a - b);
  if (mergedArr.length === 1) return mergedArr[0];
  if (mergedArr.length % 2 === 0) {
    const sum =
      mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2];
    return sum / 2;
  } else {
    return mergedArr[Math.ceil(mergedArr.length / 2) - 1];
  }
};

const median = findMedianSortedArrays([1, 2], [3, 4]);

console.log(median);
