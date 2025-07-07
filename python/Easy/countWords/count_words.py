'''
1. create a function that accepts a string (sentence). eg "This is a test and this test is easy."
2. create a dictionary variable which will be containing the words from the string and it's occurrence count {'this': 2, 'is': 2, 'a': 1, 'test': 2, 'easy': 1}
3. iterate through all the words in the array and put it in dictionary if not present, if present increase count.
4. finally return the word occurrence dictionary.
'''
import string

def count_words(s: str) -> dict[str, int]:
    words = s.lower().translate(str.maketrans('', '', string.punctuation)).split()
    word_occurrence_count: dict[str, int] = {}
    for word in words:
        if word in word_occurrence_count:
            word_occurrence_count[word] += 1
        else:
            word_occurrence_count[word] = 1
    return word_occurrence_count

print(count_words("This is a test and this test is easy."))
# -> {'this': 2, 'is': 2, 'a': 1, 'test': 2, 'and': 1, 'easy': 1}
count_words("hello world hello")
# → {'hello': 2, 'world': 1}