/**
 * Given a multi-dimensional integer array, return the total number of integers stored inside this array.
 */

function totalIntegers(arr) {
    if (arr.length === 0) return 0
    const ele = arr.shift()
    let intCount = 0
    if (Array.isArray(ele)) {
        intCount += totalIntegers(ele)
    } else if (Number.isInteger(ele)) {
        intCount++
    }
    return intCount + totalIntegers(arr)
}

var integersCount = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]) // 7
console.log(integersCount)
