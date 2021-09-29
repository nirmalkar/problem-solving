// Program to implement enqueue and dequeue array
let arr1 = [1, 2, 3, 4, 5, 6, 45, 23]
let arr2 = [12, 23, 4, 5, 6, 7, 8, 9]

const arrOneLength = arr1.length

// exchange values using enqueue and dequeue
let arr1Length = arr1.length
function enqueueAndDequeue(arr1, arr2) {
    while (arr1.length >= 1) {
        const temp = arr1.pop()
        arr2.push(temp)
    }
    arr2.reverse()
    while (arr2.length > arrOneLength) {
        let temp = arr2.pop()
        arr1.push(temp)
    }
}
const exchangedVals = enqueueAndDequeue(arr1, arr2)
console.log(arr1, arr2)
