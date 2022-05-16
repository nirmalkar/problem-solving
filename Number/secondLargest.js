const a = [-16, -10, -13, -8, 2]
const b = [16, 10, 13, 8, 2]
const getSecondLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            const temp = largest
            largest = arr[i]
            secondLargest = temp
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(getSecondLargest(a))
console.log(getSecondLargest(b))
