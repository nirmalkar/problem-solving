/*
Given an array of integers, find the largest difference between two elements such that 
the element of lesser value must come before the greater element
*/

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10]

function findLargestDifference(array) {
    const valArray = []
    array.forEach((ele, i) => {
        if (array[i] < array[i + 1] && array[i + 1] !== undefined) {
            valArray.push({
                diff: array[i + 1] - array[i],
                nums: `${array[i]} and ${array[i + 1]}`,
            })
        }
    })
    const maxDiff = Math.max(...valArray.map((ele) => ele.diff))
    const diffObj = valArray.filter((ele) => ele.diff === maxDiff)[0]
    return {
        diff: maxDiff,
        nums: diffObj,
    }
}

const diff = findLargestDifference(array)
console.log(diff)
