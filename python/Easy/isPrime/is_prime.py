# create a function called isPrime, and pass a parameter called num
# if num % 2 = 0 then return false
# if num <= 1 return False
# if num == 2 return True
# check divisibility for odd number up tp sqrt(num)
# call the function isPrime and pass a number as parameter inside it.

import math

def is_prime(num: int) -> bool:
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True
    
res_is_prime = is_prime(4)
res_is_prime2 = is_prime(7)
print(res_is_prime, 'res_is_prime')
print(res_is_prime2, 'res_is_prime2')