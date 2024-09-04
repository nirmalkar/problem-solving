// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Example 1. input: "{}", output: true
// Example 2. input: "()[]{}", output: true
// Example 3. input: "{{[}}", output: false
function isValid(s: string) {
    const stack: string[] = []
    const mapping: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    for (const char of s) {
        if (char in mapping) {
            const topElement = stack.length === 0 ? '#' : stack.pop()
            if (mapping[char] !== topElement) {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return !stack.length
}

const input = '[[[[][][]{({)}{()}]]]'

const result = isValid(input)
console.log(result)
