# Merge Two Sorted Linked Lists

## 🧩 Problem Statement

You are given the heads of two sorted linked lists, `list1` and `list2`.  
Merge the two lists into one sorted linked list, and return the head of the merged list.

- **Do not use arrays or built-in sort.**
- You must merge them **in-place** by rearranging node pointers.

---

## 📥 Input

- `list1`: ListNode — head of the first sorted linked list
- `list2`: ListNode — head of the second sorted linked list

---

## 📤 Output

- ListNode — head of the merged sorted linked list

---

## 🔍 Examples

**Input:**  
list1 = [1, 2, 4], list2 = [1, 3, 4]  
**Output:**  
[1, 1, 2, 3, 4, 4]

**Input:**  
list1 = [], list2 = []  
**Output:**  
[]

**Input:**  
list1 = [], list2 = [0]  
**Output:**  
[0]

---

## 🔧 Constraints

- Both `list1` and `list2` are sorted in non-decreasing order.
- The number of nodes in each list is in the range `[0, 50]`.
- Each node's value is between `-100` and `100`.

---