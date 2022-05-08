// Remove unbalanced parentheses in a given expression.

// 1. create a function that take string
// 2. looping through the string elements and putting it into set.

const balanceParenthesis = (str) => {
    const strArr = []
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '(') {
            if (str[i] === ')') {
                strArr.push(temp)
                temp = ''
            } else {
                temp += str[i]
            }
        }
    }
    return strArr
        .map((el) => {
            if (el) {
                return '(' + el + ')'
            }
        })
        .filter((el) => el)
}

const resultStr = balanceParenthesis('((asd))(sdf)((swa))')
console.log(resultStr)
