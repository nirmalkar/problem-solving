function repeatedString(s, n) {
    if (s.length === 1 && s === 'a') {
        return n
    }
    const loopCount = Math.ceil(n / s.length)
    let count = 0
    for (let i = 0; i < loopCount; i++) {
        s = s + s
    }
    s.slice(0, n)
        .split('')
        .forEach((ele) => {
            if (ele === 'a') {
                count += 1
            }
        })
    return count
}

console.log(repeatedString('c', 10))
