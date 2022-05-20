// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(arr) {
    let total = 0
    if (arr.length === 0) return 0
    const ele = arr.shift()
    if (Array.isArray(ele)) {
        total = total + SumSquares(ele)
    } else {
        total = ele * ele
    }
    return total + SumSquares(arr)
}

const arrOne = [10, [[10], 10], [10]]
const arrTwo = [[1, 2], 3]
const arrThree = [[[[[[[[[1]]]]]]]]]

console.log(SumSquares(arrOne))
console.log(SumSquares(arrTwo))
console.log(SumSquares(arrThree))
