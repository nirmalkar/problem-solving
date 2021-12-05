function chocolateFeast(n, c, m) {
    let chocolateEaten = Math.floor(n / c)
    function helper(chocolateEaten, currentWrapper) {
        if ((chocolateEaten + currentWrapper) % m === 0) return 1
        if ((chocolateEaten + currentWrapper) / m < 1) return 0
        if (chocolateEaten === 1 && currentWrapper === 1) return 1
        if (chocolateEaten <= 1 && currentWrapper === 0) return 1
        if (chocolateEaten === 0 && currentWrapper === 0) return 0
        const calcChocolateEaten = Math.floor(
            (chocolateEaten + currentWrapper) / m
        )
        currentWrapper = chocolateEaten % m
        return calcChocolateEaten + helper(calcChocolateEaten, currentWrapper)
    }
    return chocolateEaten + helper(chocolateEaten, 0)
}

console.log(chocolateFeast(15, 3, 2))
console.log(chocolateFeast(10, 2, 5))
console.log(chocolateFeast(12, 4, 4))
console.log(chocolateFeast(6, 2, 2))
