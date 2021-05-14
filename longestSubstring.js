function findLongestSubstring(str) {
  console.log(str.length);
  const strArr = [];
  for (let i = 0; i < str.length; i++) {
    const currFirstAlphabet = str[i];
    let newStr = str[i];
    for (let j = i + 1; j < str.length; j++) {
      if (currFirstAlphabet !== str[j]) {
        newStr = newStr + str[j];
      } else {
        strArr.push(newStr);
        if (str[i + 1]) {
          newStr = str[i + 1];
        }
        break;
      }
    }
  }
  const sortedStrArr = strArr.sort((a, b) => a.length - b.length);
  for (let i = 0; i < sortedStrArr.length; i++) {
    if (sortedStrArr[i].length >= sortedStrArr[i + 1].length) {
      return sortedStrArr[i];
    }
  }
}

const longestStr = findLongestSubstring("asdfwwaasd");
console.log(longestStr);
