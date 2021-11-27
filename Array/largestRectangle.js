/**
 * Largest Rectangle in Histogram
 *
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the
 * area of largest rectangle in the histogram.
 *
 * Example:
 *
 * Input: [2,1,5,6,2,3]
 * Output: 10
 */

const largestRectangle = (heights) => {
    let max = 0
    let stack = []
    for (let i = 0; i <= heights.length; i++) {
        let h = i === heights.length ? 0 : heights[i]
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            let h2 = heights[stack.pop()]
            console.log(stack)
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
            console.log(w, i, heights[i])
            max = Math.max(max, h2 * w)
        }
        stack.push(i)
    }
    return max
}

const heights = [2, 1, 5, 6, 2, 3]
console.log(largestRectangle(heights))
