var findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return 0;
  const mergerdArr = nums1.concat(nums2).sort((a, b) => a - b);
  if (mergerdArr.length === 1) return mergerdArr[0];
  if (mergerdArr.length % 2 === 0) {
    const median =
      mergerdArr[mergerdArr.length / 2 - 1] + mergerdArr[mergerdArr.length / 2];
    console.log(median);
    return median / 2;
  } else {
    return mergerdArr[Math.ceil(mergerdArr.length / 2) - 1];
  }
};

const median = findMedianSortedArrays([1, 2], [3, 4]);

// console.log(median);
