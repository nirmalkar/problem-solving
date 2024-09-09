# Problem Statement
# Climbing Stairs
# You are climbing a staircase. It takes n steps to reach the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Example 1: Input: n = 2 Output: 2
# Example 1: Input: n = 3 Output: 3
# Example 1: Input: n = 5 Output: 8


def climbStairs(n: int) -> int:
    if n == 1:
        return 1
    if n == 2:
        return 2
    climb_type_one = 1
    climb_type_two = 2
    for i in range(3, n + 1):
        jumps = climb_type_one + climb_type_two
        curr = climb_type_two
        climb_type_one = curr
        climb_type_two = jumps
    return climb_type_two


result = climbStairs(3)
print(result)
