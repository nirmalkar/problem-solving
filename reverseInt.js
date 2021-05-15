/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  const reversedNum = parseInt(x.toString().split("").reverse().join(""));
  if (-Math.pow(2, 31) <= reversedNum && reversedNum <= Math.pow(2, 31)) {
    if (x >= 0) return reversedNum;
    return -reversedNum;
  } else {
    return 0;
  }
};

console.log(reverse(153423645));
