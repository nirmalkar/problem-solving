# create two pointers left and right holding values 0 and len(str) - 1
# create a loop, which will be true until left < right
# check of special characters and spaces, if striks left++ or right-- to avoid them, as we are comparing letters
# check if sring[left] == string[right], if not return False
#  end of while loop increase left (left++) and decrease right (right--)
# if loop completes return True


def is_palindrome(string: str) -> bool:
    left, right = 0, len(string) - 1
    while left < right:
        if not left < right: break
        while left < right and not string[left].isalnum():
            left += 1
        while left < right and not string[right].isalnum():
            right -= 1
        if string[left].lower() != string[right].lower():
            return False
        
        left += 1
        right -= 1
    return True



print(is_palindrome('ala ala')) # True
print(is_palindrome('A man, a plan, a canal: Panama'))  # True
print(is_palindrome('check if palindrome!')) # False
print(is_palindrome('')) # True
