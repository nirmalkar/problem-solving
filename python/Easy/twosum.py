# Problem Statement
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example
# Input:
# nums = [1, 7, 11, 15, 2]
# target = 9
# Output:
# (1, 4)
# Explanation:
# Because nums[1] + nums[4] == 9, we return (1, 4).

# There could be two approaches to solve this problem:
# 1. Brute Force: Use a nested loop to check all possible pairs and see if they sum up to the target. This approach has a time complexity of 𝑂(𝑛2).
# 2. Hash Map: Use a hash map to store the difference between the target and each element. This way, you can find if the complement exists in constant time. This approach has a time complexity of 𝑂(𝑛)

from typing import List, Optional, Dict

# Brute force approach
def two_sum_brute(nums: List[int], target: int) -> Optional[tuple[int, int]]:
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return (i, j)
            
            

nums = [1, 7, 11, 15, 2]
target = 9
result_brute = two_sum_brute(nums, target)
print(result_brute)


#  Hash Map approach

def two_sum_hash(nums:List[int], target: int) -> Optional[tuple[int, int]]:
    difference_store_obj: Dict[int, int] = {}
    for i, num in enumerate(nums):
        difference = target - num
        if difference in difference_store_obj:
            return (difference_store_obj[difference], i)
        difference_store_obj[num] = i
    
    return None

result_hash = two_sum_hash(nums, target)
print(result_hash)
