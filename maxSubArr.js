/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return;
  if (nums.length === 1) return nums[0];
  let sumArr = [];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      current = current + nums[j];
      sumArr.push(current);
    }
    if (nums[i + 1]) {
      current = nums[i + 1];
    }
  }
  return sumArr.sort((a, b) => a - b)[sumArr.length - 1];
};
console.log(maxSubArray([5, 4, -1, 7, 8]));
