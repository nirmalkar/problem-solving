var myPow = function (x, n) {
  const conditionOne = -100 < x && x < 100;
  const conditionTwo = -Math.pow(2, 31) <= n && n <= Math.pow(2, 31) - 1;
  const poweredNum = Math.pow(x, n);
  const conditionThree =
    -Math.pow(10, 4) <= poweredNum && poweredNum <= Math.pow(10, 4);
  if (conditionTwo && conditionOne && conditionThree) {
    return poweredNum;
  }
  return;
};

const poweredVal = myPow(2.0, 10);
console.log(poweredVal);
