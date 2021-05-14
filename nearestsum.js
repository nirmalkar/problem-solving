function checkSum(arrOne, arrTwo, num) {
  let currentNearest = [arrOne[0], arrTwo[0]];
  arrOne.forEach((eleArrOne) => {
    arrTwo.forEach((eleArrTwo) => {
      const isNearest =
        Math.abs(num - (eleArrOne + eleArrTwo)) <
        Math.abs(num - currentNearest.reduce((a, c) => a + c));
      if (isNearest) {
        currentNearest = [eleArrOne, eleArrTwo];
      }
    });
    console.log(currentNearest);
  });
  return currentNearest;
}

checkSum([1, 12, 15, 8, 4, 23], [7, 12, 5, 18, 14, 33], 36);
