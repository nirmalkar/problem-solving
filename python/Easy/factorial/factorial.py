'''
1. create function calculateFactorial,
2. run loop number times which is passed as a parameter
3. if not number then return 0
4. create a variable to which contains the factorial value
5. return the variable once loop is done.
'''

# iterative approach

def calculateFactorial(num):
    if type(num) != int or num < 0:
        return 0
    factorial = 1
    for i in range(1, num + 1, 1):
        factorial *= i
    return factorial

print(calculateFactorial(5))
print(calculateFactorial('e'))
           
# recursive approach

def calculateFactorialRecursive(num):
    if type(num) != int or num < 0:
        return 0
    if(num == 0): return 1
    return num * calculateFactorialRecursive(num - 1)

print(calculateFactorialRecursive(5))