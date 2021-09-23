var longestPalindrome = function (s) {
  const strArr = s.split("");
  const palindromeArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let currStr = strArr[i];

    for (let j = 1; j < strArr.length; j++) {
      if (currStr === currStr.split("").reverse().join("")) {
        currStr = currStr + strArr[j];
        console.log(currStr);
      } else {
        palindromeArr.push(currStr);
        break;
      }
    }
  }
  console.log(palindromeArr);
  return palindromeArr.sort((a, b) => a.length - b.length)[
    palindromeArr.length - 1
  ];
};

const p = longestPalindrome("cbbd");
console.log(p);
