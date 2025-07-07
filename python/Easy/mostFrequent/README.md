## Find the Most Frequent Element in a List

### Problem Statement

Write a function that takes a list of elements (numbers or strings) and returns the element that appears most frequently in the list.

If there are multiple elements with the same highest frequency, return **any one** of them.

---

### Examples

```python
most_frequent([1, 3, 1, 3, 2, 1])                 → 1  
most_frequent(["a", "b", "b", "a", "c", "b"])     → "b"
most_frequent([7])                                → 7
most_frequent([])                                 → None (or raise exception)

### Constraints
- Handle both integers and strings
- Return None if list is empty
- Do not use built-in functions like max(collections.Counter(...)) for now — try solving it manually first


