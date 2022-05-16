/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
    function productOfArrayHelper(arr, idx) {
        if (idx === 0) return arr[idx]
        return arr[idx] * productOfArrayHelper(arr, idx - 1)
    }
    return productOfArrayHelper(arr, arr.length - 1)
}

const result = productOfArray([1, 2, 3, 10]) // 60
console.log(result)
