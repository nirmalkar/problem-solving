Array.prototype.ourReverse = function () {
    const newArr = []
    for (let i = this.length - 1; i >= 0; i--) {
        newArr.push(this[i])
    }
    return newArr
}

var addTwoNumbers = function (l1, l2) {
    const lOne = l1[0]
    const lTwo = l2[0]
    if (lOne === 0 && lTwo === 0) return 0

    const reversedNumberOne = l1.ourReverse()
    const reversedNumberTwo = l2.ourReverse()
    const s1 = String(reversedNumberOne)
    const s2 = String(reversedNumberTwo)
    const sum = String(
        Number(s1.replaceAll(',', '')) + Number(s2.replaceAll(',', ''))
    )
        .split('')
        .reverse()

    return sum.map((ele) => Number(ele))
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
