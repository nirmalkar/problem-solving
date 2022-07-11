/**
 * rotate 2d array 90deg
 * O/P
 * [[1, 2, 9],[3, 5, 4],[6, 7, 1],]
 */

const rotateArr = (arr) => {
    const rotatedArr = []
    for (let i = 0; i < arr.length; i++) {
        const tempArr = []
        Array.from(Array(arr.length).keys()).forEach((ele) => {
            tempArr.push(arr[ele][i])
        })
        rotatedArr.push(tempArr)
    }
    return rotatedArr
}
const arr = [
    [1, 3, 6],
    [2, 5, 7],
    [9, 4, 1],
]
console.log(rotateArr(arr))
