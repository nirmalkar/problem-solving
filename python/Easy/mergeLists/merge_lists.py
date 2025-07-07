

from typing import Optional

class Node:
    def __init__(self, val: int = 0, next = None ) -> None:
        self.val = val
        self.next = next


def create_linked_list(nums: list[int]):
    dummy_list_node = Node()
    current_node = dummy_list_node
    for num in nums:
        current_node.next = Node(num)
        current_node = current_node.next
    return dummy_list_node.next

linked_list1 = create_linked_list([1, 2, 4])
linked_list2 = create_linked_list([1, 3, 4])

def print_linked_list(head: Optional[Node]):
    list_from_linked_list = []
    while head:
        list_from_linked_list.append(str(head.val))
        head = head.next
    print(" -> ".join(list_from_linked_list))

print_linked_list(linked_list1)

def merge_lists(list1: Optional[Node], list2: Optional[Node]) -> Optional[Node]:
    dummy_list = Node()
    current_list = dummy_list
    while list1 and list2:
        if list1.val < list2.val:
            current_list.next = list1
            list1 = list1.next
        else:
            current_list.next = list2
            list2 = list2.next
        current_list = current_list.next
    current_list.next = list1 or list2
    return dummy_list.next


print_linked_list(merge_lists(linked_list1, linked_list2))