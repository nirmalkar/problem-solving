// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
    const finalArr = []
    if (head.length === 1 && n === 1) return []
    for (let i = 0; i < head.length; i++) {
        if (i !== head.length - n) {
            finalArr.push(head[i])
        }
    }
    return finalArr
}
let head = [1, 2]
let n = 1
console.log(removeNthFromEnd(head, n))
