// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

//Write your program here

function findMissingNum(arrayOfIntegers) {
  let missingNum;
  arrayOfIntegers
    .sort((a, b) => a - b)
    .forEach((ele, i) => {
      if (arrayOfIntegers.indexOf(ele) !== arrayOfIntegers.length - 1) {
        if (ele + 1 !== arrayOfIntegers[i + 1]) {
          missingNum = ele + 1;
        }
      }
    });
  return missingNum;
}

console.log(findMissingNum(arrayOfIntegers));
