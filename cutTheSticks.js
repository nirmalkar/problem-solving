/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of  sticks, print the number of n sticks that are left before each iteration until there are none left.
*/

/**
 * 
 * @param {Array} arr 
 * @returns {Array} array containing length of array at each iteration 
 */

const cutTheSticks = (arr)=>{
    let latestArr = arr
    let lengthArr = []
    function helper(latestArr){
        if(latestArr.length === 1)  {
            lengthArr.push(1)   
            return lengthArr
        }
        lengthArr.push(latestArr.length)
        const reduceBy = latestArr.sort()[0]
        const updatedArr = latestArr.map(ele => ele - reduceBy).filter(Boolean)
        latestArr = updatedArr
        return helper(latestArr)
    }
    return helper(latestArr)
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));