// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function powerFunction(a, b) {
    if (b === 0) return 1
    function helper(num, pow) {
        if (pow === 1) return 1
        return num * helper(num, pow - 1)
    }
    return helper(a, b)
}

const pow = powerFunction(2, 4)
console.log(pow)
