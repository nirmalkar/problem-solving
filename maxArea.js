var maxArea = function (height) {
  const greatestNum = height.sort((a, b) => a - b)[height.length - 1];
  if (greatestNum > 2) {
    return greatestNum * greatestNum;
  }
  return greatestNum;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
