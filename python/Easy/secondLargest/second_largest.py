'''
Steps
1. create a function second_largest.
2. if length of array is smaller than 2 return None
3. create two variables first and second, which will be containing largest and second largest value
4. create a loop of number array times.
5. inside loop check if num > first then assign 
    second = first 
    first = num
    elif first > num > second then 
    second = num
6. finally return second value, if not second return None
'''



def second_largest(numArr):
    if not len(numArr) > 1:
        return None
    first = float('-inf')
    second = float('-inf')
    for num in numArr:
        if num > first:
            second = first
            first = num
        elif first > num > second:
            second = num
    return second if second  != float('-inf') else None

print(second_largest([3, 10, -5]))
# o/p 3
print(second_largest([10, 20, 4, 45, 99]))
# o/p 45
print(second_largest([5, 5, 5]))
# o/p None
print(second_largest([5]))
# o/p None
print(second_largest([5,6]))
# o/p 5