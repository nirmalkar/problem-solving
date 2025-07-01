'''
1. create a function that accepts string.
2. create a variable with empty string inside the function.
2. create a loop which iterate through all the string character.
4. while iterating through it select the last to first character from string and add it to the empty string.
'''

def reverse_string(str: str) -> str:
    reversed_str = ''
    for i in range(len(str)):
        reversed_str +=  str[len(str) - (i + 1)]
    return reversed_str

result = reverse_string('hello')
print(result)

