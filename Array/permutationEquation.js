/**
 * question: https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true
 *
 */
function permutationEquation(p) {
    const indexArray = []
    const finalArray = []
    for (let i = 1; i <= p.length; i++) {
        const idx = p.findIndex((ele) => ele === i)
        indexArray.push(idx + 1)
    }
    indexArray.forEach((value) => {
        const idx = p.findIndex((ele) => ele === value)
        finalArray.push(idx + 1)
    })
    return finalArray
}

permutationEquation([5, 2, 1, 3, 4])
