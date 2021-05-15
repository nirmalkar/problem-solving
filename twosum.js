const twoSum = function (nums, target) {
  let outputArr = [];
  nums.forEach((ele, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      if (ele + nums[j] === target) {
        outputArr = [i, j];
      }
      if (outputArr.length) {
        return;
      }
    }
  });
  return outputArr;
};
const sumIdx = twoSum([3, 2, 3, 4], 6);
console.log(sumIdx);
