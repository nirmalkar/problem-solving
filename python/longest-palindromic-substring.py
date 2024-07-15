# Question: Given a string s, find the longest palindromic substring in s.

# Example Input:
# s = "babad"
# Example Output:

# Copy code
# "bab" or "aba"
# Explanation: The substring "bab" is a palindrome and is the longest one in the input string. There is another palindrome "aba" of the same length.

def longest_palindrome(s: str) -> str:
    if not s:
        return ""
    
    longest_palindrome = s[0]
    
    for i in range(len(s)):
        temp = expand_around_center(s, i, i)
        if len(temp) > len(longest_palindrome):
            longest_palindrome = temp
        
        temp = expand_around_center(s, i, i + 1)    
        if len(temp) > len(longest_palindrome):
            longest_palindrome = temp
    
    return longest_palindrome

def expand_around_center(s: str, left: int, right: int) -> str:
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return s[left + 1:right]

s = "babad"
print(longest_palindrome(s))  
