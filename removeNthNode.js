/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

const removeNthFromEnd = function(head, n) {
    if(head.length === 1 && n === 1) return []
 head.splice(head.length - n, 1)
 return head
};

console.log(removeNthFromEnd( [1,2,3,4,5], 2));