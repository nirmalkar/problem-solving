// Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two)

function isPowerOfTwo(num) {
    if (num < 1) return false
    if (num === 1) return true
    function helper(num) {
        if (num / 2 === 1) {
            return true
        } else if (num / 2 < 2 && num / 2 !== 1) {
            return false
        }
        return helper(num / 2)
    }
    return helper(num)
}

const a = isPowerOfTwo(4) // true
const b = isPowerOfTwo(64) // true
const c = isPowerOfTwo(1) // true
const d = isPowerOfTwo(0) // false
const e = isPowerOfTwo(-1) // false
const f = isPowerOfTwo(23) //false
const g = isPowerOfTwo(36) //false
const h = isPowerOfTwo(4194304) //true

console.log(a, b, c, d, e, f, g, h)
