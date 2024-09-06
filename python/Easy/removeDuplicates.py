# Given an integer array nums sorted in increasing order, remove the duplicates in place such that each unique element appears only once.
# The relative order of the elements should be kept the same.
# Since it is impossible to change the length of the array in some languages, you must place the result in the first part of the array and return the new length of the array.
# Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

# Example 1: input: nums = [1, 1, 2]
# output: 2, nums = [1, 2]
# Example 2: input: nums = [0, 0, 1, 1, 1, 1, 2, 3, 4]
# output: 5, nums = [0, 1, 2, 3, 4]


def removeDuplicates(nums: list[int]) -> list[int]:
    if not nums:
        return 0
    unique_index = 0
    for i in range(1, len(nums)):
        if nums[i] != nums[unique_index]:
            unique_index += 1
            nums[unique_index] = nums[i]
    return nums


nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
result = removeDuplicates(nums)

print(result)
