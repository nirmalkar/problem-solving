//  return all the unique numbers (ES6 Implementation)
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const returnUnique = (array) => {
  // const set = new Set(array)
  // console.log(set);
  const numOccurrence = {};
  array.forEach((element) => {
    if (numOccurrence[element]) {
      numOccurrence[element] = numOccurrence[element] + 1;
    } else {
      numOccurrence[element] = 1;
    }
  });
  return Object.keys(numOccurrence);
};

console.log(returnUnique(array));
