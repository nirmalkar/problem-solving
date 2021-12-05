//https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true

function fairRations(arr) {
    if (arr.length === 2) return 'NO'
    let isContainsOdd = arr.some((ele) => ele % 2 !== 0)
    let counter = 0
    while (isContainsOdd) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                arr[i] = arr[i] + 1
                if (arr[i + 1]) {
                    arr[i + 1] = arr[i + 1] + 1
                    counter = counter + 2
                }
                isContainsOdd = arr.some((ele) => ele % 2 !== 0)
                break
            }
        }
    }
    return counter
}

console.log(fairRations([1, 2]))
