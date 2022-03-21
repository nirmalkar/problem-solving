const pushAtTheIndex = (arr) => {
    const max = Math.max(...arr)
    const result = []
    for (let i = 0; i <= max; i++) {
        result.push(null)
    }
    for (let i = 0; i < result.length; i++) {
        if (arr[i]) {
            result[arr[i]] = arr[i]
        }
    }
    console.log(result)
}

const array = [1, 2, 8, 7, 3, 5]

pushAtTheIndex(array)
