# Given the head of a singly linked list, reverse the list, and return its head.

# Example
# Input:
# 1 -> 2 -> 3 -> 4 -> 5 -> NULL
# Output:
# 5 -> 4 -> 3 -> 2 -> 1 -> NULL

class ListNode:
    def __init__(self, val=0, next = None) -> None:
        self.val = val
        self.next = next

def reverseNodes(head:ListNode):
    prev = None
    curr = head

    while curr is not None:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev


def printListNodes(head:ListNode):
    while head is not None:
        print(head.val, end=" => ")
        head = head.next
    print("NULL")

head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

printListNodes(head)
reversedNodes = reverseNodes(head)
printListNodes(reversedNodes)