//1.1 Given an array of integers, find the largest product yielded from three of the integers

const numArr = [-10, 7, 29, 30, 5, -10, -70];

const computeProduct = (numArr) =>{
    if(numArr.length < 3){
        return "Length of num array should be more than 3"
    }
    const allPositiveNums = numArr.map(ele => Math.abs(ele))
    const sortedArr = allPositiveNums.sort((a,b)=> a-b)
    console.log(sortedArr);
    const fitst = numArr.length - 1
    return (sortedArr[fitst] * sortedArr[ fitst - 1]* sortedArr[fitst - 2])
}


console.log(computeProduct(numArr)) // 21000

//Write your program here

