# Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
# An input string is valid if:
# 1. Open brackets must be closed by the same type of brackets.
# 2. Open brackets must be closed in the correct order.
# Example 1. input: "{}", output: true
# Example 2. input: "()[]{}", output: true
# Example 3. input: "{{[}}", output: false
def isValid(s: str) -> bool:
    stack = []
    mapping = {"}": "{", ")": "(", "]": "["}
    for char in s:
        print(stack)
        if char in mapping:
            top_element = stack.pop() if stack else "#"
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack


input = "((())"
result = isValid(input)

print(result)
