// Problem Statement
// Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1: Input: n = 2 Output: 2
// Example 1: Input: n = 3 Output: 3
// Example 1: Input: n = 5 Output: 8
const climbStairs = (n: number): number => {
    if (n === 1) return 1
    if (n === 2) return 2
    let climbedOne = 1
    let climbedTwo = 2
    for (let i = 3; i < n + 1; i++) {
        let jumpsToClimb = climbedOne + climbedTwo
        let temp = climbedTwo
        climbedOne = temp
        climbedTwo = jumpsToClimb
    }
    return climbedTwo
}
console.log(climbStares(6))
