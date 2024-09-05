# Palindrome Number
# Given an integer num, return True if num is a palindrome integer, otherwise return False.

# Example 1:
# input: x = 121
# output: True

# Example 2:
# input: x = 110
# output: False


def isPalindrome(num: int) -> bool:
    if num < 0:
        return False
    original_number = num
    reversed_num = 0
    while num > 0:
        temp = num % 10
        reversed_num = reversed_num * 10 + temp
        num //= 10
    return reversed_num == original_number


num = 101
result = isPalindrome(num)
print(result)
