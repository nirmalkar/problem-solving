// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

const sumRange = (num) => {
    function helper(range) {
        if (range === 1) {
            return range
        }
        return range + helper(range - 1)
    }
    return helper(num)
}

const sum = sumRange(3)
console.log(sum)
