// Question : https://edabit.com/challenge/NMCc4pcDx6d7hkvcu

function happyAlgorithm(num) {
    const numsArr = [num]
    let counter = 1
    function helper(theNum) {
        let sum = 0
        String(theNum)
            .split('')
            .forEach((ele) => {
                sum = sum + (ele * 1) ** 2
            })
        if (sum === 1) {
            return `HAPPY ${counter}`
        }
        if (numsArr.includes(sum)) {
            return `SAD ${counter}`
        }
        numsArr.push(sum)
        counter++
        return helper(sum)
    }
    return helper(num)
}
const a = happyAlgorithm(89) // "SAD 8"
const b = happyAlgorithm(139) //"HAPPY 5"

console.log('result =>', a)
console.log('result =>', b)
