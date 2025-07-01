# create a function that takes a string, inside it
# 1. create a variable to count vowel (vowelCounter), and create an array of vowels.
# 2. remove all the space from the string.
# 3. create array of characters of the string and iterate through it using loop.
# 4. if the character is a vowel increase count.
# 5. return vowelCounter

def count_vowels(string):
    if not string:
        return 0
    vowels = {'a', 'e', 'i', 'o', 'u'}
    vowel_counter = 0
    for s in string:
       if s.lower() in vowels:
           vowel_counter += 1
    return vowel_counter

result = count_vowels("Hello world!")
print(result)