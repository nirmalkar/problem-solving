/*
Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks In this example, 
we will only consider "{}" as valid parentheses {}{} would be considered balancing. {{{}} is not balanced
*/
var expression = '{{}}{}{}'
var expressionFalse = '{}{{}'

const isBalanced = (expression) => {
    if (expression[0] === '}' || expression[expression.length - 1] === '{') {
        return false
    }
    const someObj = { '{': 0 }
    expression.split('').forEach((ele) => {
        if (ele === '{') {
            someObj['{']++
        } else {
            someObj['{']--
        }
    })
    if (someObj['{'] === 0) return true
    return false
}

const a = isBalanced(expression) // true
const b = isBalanced(expressionFalse) // false
const c = isBalanced('') // true
const d = isBalanced('}{') // false
const e = isBalanced('}{{}') // false
console.log(a, b, c, d, e)
