/**
 * The function should return an array containing repetitions of the number argument. For instance,
 * replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
 */

function replicate(i, num) {
    let resultArr = []
    function helper(loopTimes, num) {
        if (loopTimes <= 0) return resultArr
        resultArr.push(num)
        helper(loopTimes - 1, num)
        return resultArr
    }
    return helper(i, num)
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []
