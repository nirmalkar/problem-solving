# You are given the heads of two sorted linked lists, l1 and l2. 
# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None) -> None:
        self.val = val
        self.next = next


def mergeTwoLists(l1:Optional[ListNode], l2:Optional[ListNode]) -> ListNode:
    temp = ListNode()
    current = temp
    
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 =l2.next
        current = current.next
    current.next = l1 if l1 else l2
    
    return temp.next

def printNodes(head:ListNode) -> None:
    while head: 
        print(head.val, end=" -> ")
        head = head.next
    print("NULL")
        

# head = ListNode(1)
# head.next = ListNode(3)
# head.next.next = ListNode(4)
# head.next.next.next = ListNode(7)
list1 = ListNode(1, ListNode(3,ListNode(4,ListNode(7))))
list2 = ListNode(1, ListNode(2,ListNode(6,ListNode(9))))


result = mergeTwoLists(list1, list2)
printNodes(result)