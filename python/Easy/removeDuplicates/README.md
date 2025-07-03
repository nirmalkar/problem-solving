# Remove Duplicates from a List

## Problem Statement

Write a function that takes a list of integers as input and returns a new list with all duplicates removed.  
The order of elements should be preserved as in the original list (i.e., the first occurrence of each number is kept).

---

## Examples

```python
remove_duplicates([1, 2, 2, 3, 4, 4, 5])   # → [1, 2, 3, 4, 5]
remove_duplicates([10, 20, 10, 30, 20])    # → [10, 20, 30]
remove_duplicates([])                      # → []
remove_duplicates([1, 1, 1, 1])            # → [1]
```

## Constraints

-   Do not use set() directly if it breaks the order.
-   Your function should return a new list, not modify the original.
