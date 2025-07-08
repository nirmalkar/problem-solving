def decimal_to_binary(num: int) -> str:
    if num == 0:
        return "0"
    equivalentBinaryNumber = ""
    while num > 0:
        equivalentBinaryNumber = str(num % 2) + equivalentBinaryNumber
        num = num // 2
    return equivalentBinaryNumber

print(decimal_to_binary(5)) #101
print(decimal_to_binary(255))   #"11111111"