const addTwoNumbers = function (l1, l2) {
  const reversedL1 = [];
  const reversedL2 = [];
  for (let i = l1.length - 1; i >= 0; i--) {
    reversedL1.push(l1[i]);
  }
  for (let i = l2.length - 1; i >= 0; i--) {
    reversedL2.push(l2[i]);
  }
  const numOne = parseInt(String(reversedL1).replace(/,/g, ""));
  const numTwo = parseInt(String(reversedL2).replace(/,/g, ""));
  return numOne + numTwo;
};

const sum = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log(sum);
