// Question: https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        if (String(numArray[i]).includes('7')) {
            return 'Boom!'
        }
    }
    return 'there is no 7 in the array'
}
const resultOne = sevenBoom([1, 2, 3, 4, 5, 6, 7]) // "Boom!"
// 7 contains the number seven.

const resultTwo = sevenBoom([8, 6, 33, 100]) //"there is no 7 in the array"
// None of the items contain 7 within them.

const resultThree = sevenBoom([2, 55, 60, 97, 86]) //"Boom!"
// 97 contains the number seven.
console.log(resultOne)
console.log(resultTwo)
console.log(resultThree)
