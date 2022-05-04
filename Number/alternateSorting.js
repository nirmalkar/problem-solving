// Alternate sorting: Given an array of integers, rearrange the array in such a way that the first
// element is first maximum and second element is first minimum.
// I/P [4, 5, 3, 1, 2, 7, 6] O/P [7, 1, 6, 2, 5, 3, 4]

// Pseudo code:
// 1. Sort the array in descending order.
// 2. create a new array that will contain sorted data.
// 3. iterate through the sorted array and push the first and last element to the new array. and remove those elements from the sorted array.
// 4. return the new array.

const alternateSorting = (arr) => {
    const newArr = []
    const count = Math.floor(arr.length / 2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
    for (let i = 0; i < count; i++) {
        newArr.push(arr[i])
        newArr.push(arr[arr.length - 1 - i])
    }
    if (arr.length % 2 !== 0) {
        newArr.push(arr[count])
    }

    return newArr
}
const numArr = [4, 5, 3, 1, 2, 7, 6]
const result = alternateSorting(numArr)
console.log(result)
