// Palindrome Number
// Given an integer num, return True if num is a palindrome integer, otherwise return False.

// Example 1:
// input: x = 121
// output: True

// Example 2:
// input: x = 110
// output: False

const isPalindrome = (num: number) => {
    if (num < 0) return false
    const originalNumber = num
    let reversedNumber = 0
    while (num > 0) {
        let remainder: number = num % 10
        reversedNumber = reversedNumber * 10 + remainder
        num = Math.floor(num / 10)
    }
    return originalNumber === reversedNumber
}

const num = 110
const res = isPalindrome(num)
console.log(res)
