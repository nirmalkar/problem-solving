function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < k; i++) {
        const val = a.pop()
        a.unshift(val)
    }
    return queries.map((ele) => {
        return a[ele]
    })
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))

/**
 * shift all elements of an array to the right
 * 1. pop item from array a and store it in a variable val.
 * 2. add that variable value inside at the zeroth index of array a.
 * 3. create a loop of k times (where k is the times we wanna right shift) and repeat the step 1 AND 2.
 */
