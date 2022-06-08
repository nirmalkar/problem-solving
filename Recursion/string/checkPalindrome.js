/**
 * solve this problem recursion only.
 * Given an integer, write a function that returns true if the given number is palindrome,
 * else false. For example, 12321 is palindrome, but 1451 is not palindrome.
 */

function isNumPalindrome(number) {
    if (number >= 0 && number < 10) return 'yes'
    if (number < 0) return "I don't process negativity!"
    number = String(number)
    const len = number.length - 1
    let temp = 0
    const helper = (num, len, temp) => {
        console.log(num[temp], num[len - temp], temp, len)
        if (num[temp] === num[len - temp]) {
            temp = temp + 1
            console.log(temp, len)
            if (temp === len) {
                return 'yes'
            }
        } else {
            return 'Fuck No'
        }
        return helper(num, len, temp)
    }
    return helper(number, len, temp)
}

const n1 = 1234321
const n2 = 124321
const n3 = 8
const n4 = -12321
const n5 = 0

const r1 = isNumPalindrome(n1)
const r2 = isNumPalindrome(n2)
const r3 = isNumPalindrome(n3)
const r4 = isNumPalindrome(n4)
const r5 = isNumPalindrome(n5)
console.log(r1, r2, r3, r4, r5)
