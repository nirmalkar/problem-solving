# Count Occurrences of Each Word in a Sentence

## Problem Statement

Write a function that takes a string (sentence) as input and returns a dictionary where:

-   The keys are the unique words in the sentence.
-   The values are the number of times each word appears.

---

## Examples

```python
count_words("hello world hello")
# → {'hello': 2, 'world': 1}

count_words("This is a test. This test is easy.")
# → {'this': 2, 'is': 2, 'a': 1, 'test': 2, 'easy': 1}
```

## Constraints

-   Ignore punctuation (., ,, etc.)
-   Normalize words by converting to lowercase
-   Return result as a dictionary
-   You may use str.split(), str.lower(), and collections.defaultdict or regular dict
