// find out the num of iteration needed to make the array have all elements greater or equal to k
/**
 * elements of array is nothing but candies with their sweetness level respectively
 * we need to remove all the less sweet candies. we can remove two less sweet candies every iteration (which are less than threshold k)
 * and can add one sweet candy on the basis of formula
 * formula = the sweetness of the new element = 1 * sw of 1st min + 2 * sw of 2nd min
 * return the number of iteration needed to have only sweeter than threshold candies in the box(array).
 */

function calcSweetness(a, b) {
    return 1 * a + 2 * b
}
function returnIteration(arr, k) {
    let iteration = 0
    while (6 > Math.min(...arr)) {
        arr.sort((a, b) => a - b)
        let eleOne = arr.shift()
        let eleTwo = arr.shift()
        arr.push(calcSweetness(eleOne, eleTwo))
        iteration++
    }
    console.log(arr)
    return iteration
}

const a = [5, 1, 3, 9, 4]
const k = 8
const result = returnIteration(a, k)
console.log(result)
