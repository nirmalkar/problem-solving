var firstWord = "Mary";
var secondWord = "Army";

const isAnagram = (s1, s2) => {
  const strOne = s1.toLowerCase();
  const strTwo = s2.toLowerCase();
  const sameAlphabet = [];
  if (strOne.length === strTwo.length) {
    strOne.split("").forEach((ele, i) => {
      if (strTwo.split("").includes(ele)) {
        sameAlphabet.push(true);
      } else {
        sameAlphabet.push(false);
      }
    });
  } else {
    return false;
  }
  return !sameAlphabet.includes(false);
};

const isStrAnagram = isAnagram(firstWord, secondWord);
console.log(isStrAnagram);
