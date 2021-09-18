//1.1 Given an array of integers, find the largest product yielded from three of the integers

const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

const computeProduct = (unsortedArray) =>{
    const sortedArr = unsortedArray.sort()
    console.log(sortedArr[sortedArr.length - 1]);
}


computeProduct(unsortedArray); // 21000

//Write your program here

