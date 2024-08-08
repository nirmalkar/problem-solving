// You are given the heads of two sorted linked lists, l1 and l2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

function printNodes(list: ListNode | null) {
    while (list) {
        console.log(`\r ${list.val}`)
        list = list.next
    }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
    let temp = new ListNode()
    let current = temp
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    current.next = l1 !== null ? l1 : l2
    return temp.next
}

// const list1 = new ListNode(1)
// list1.next = new ListNode(3)
// list1.next.next = new ListNode(4)
// list1.next.next.next = new ListNode(8)

// const list2 = new ListNode(7)
// list2.next = new ListNode(9)
// list2.next.next = new ListNode(5)
// list2.next.next.next = new ListNode(6)
const l1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5))))
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const mergedList = mergeTwoLists(l1, l2)
printNodes(mergedList)
