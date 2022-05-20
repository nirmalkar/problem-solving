/**
 * Given an array of integers find any two integers in the array whose sum is closest to 0.
 */
const closestSum = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            newArr.push(arr[i] + arr[j])
        }
    }

    let tempOne = Math.abs(newArr[0])
    let tempTwo = 0
    for (let k = 0; k < newArr.length; k++) {
        let val = Math.abs(newArr[k])
        if (val < tempOne) {
            tempOne = val
            tempTwo = newArr[k]
        }
    }
    return tempTwo
}
console.log(closestSum([-63, -3, 3, -65]))
