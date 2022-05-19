// create function for adding rows, columns and diagonals of a 2d array and return the value.

function addDiagonal(arr) {
    return {
        D1: arr[0][0] + arr[1][1] + arr[2][2] + arr[3][3],
        D2: arr[0][2] + arr[1][1] + arr[2][0],
    }
}
function addRow(arr) {
    return {
        R1: arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3],
        R2: arr[1][0] + arr[1][1] + arr[1][2] + arr[1][3],
        R3: arr[2][0] + arr[2][1] + arr[2][2] + arr[2][3],
    }
}
function addColumn(arr) {
    return {
        C1: arr[0][0] + arr[1][0] + arr[2][0] + arr[3][0],
        C2: arr[0][1] + arr[1][1] + arr[2][1] + arr[3][1],
        C3: arr[0][2] + arr[1][2] + arr[2][2] + arr[3][2],
    }
}
function twoDimensionalArray(arr) {
    return [addRow(arr), addColumn(arr), addDiagonal(arr)]
}

const arr = [
    [1, 4, 6, 2],
    [5, 2, 7, 1],
    [3, 4, 9, 2],
    [4, 5, 8, 1],
]

console.log(twoDimensionalArray(arr))
