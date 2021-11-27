function equalizeArray(arr) {
    const freqArr = {}
    let maxOccurredNum = []
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (freqArr[arr[i]]) {
            freqArr[arr[i]] = freqArr[arr[i]] + 1
        } else {
            freqArr[arr[i]] = 1
        }
    }

    Object.keys(freqArr).forEach((a) => {
        if (maxOccurredNum.length > 0 && maxOccurredNum[0].value < freqArr[a]) {
            maxOccurredNum = [{ key: a, value: freqArr[a] }]
        } else {
            maxOccurredNum.push({ key: a, value: freqArr[a] })
        }
    })
    return arr.length - maxOccurredNum[0].value
}

console.log(equalizeArray([3, 3, 2, 1, 3]))
