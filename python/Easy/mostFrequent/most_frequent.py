from typing import Union
def most_frequent(arr: list[Union[int, str]]) -> Union[str, int, None]:
    if not arr: 
        return None
    frequency_dict = {}
    current_highest = arr[0]
    for ele in arr:
        if ele not in frequency_dict:
            frequency_dict[ele] = 1
        else:
            frequency_dict[ele] += 1
        if frequency_dict[ele] > frequency_dict[current_highest]:
                current_highest = ele
    return current_highest


print(most_frequent([1, 3, 1, 3, 2, 1])) # 1
print(most_frequent(["a", "b", "b", "a", "c", "b"])) # → "b"
print(most_frequent([])) # → None

'''
1. create a function most_frequent which accepts list of string or numbers, inside fn, if list is empty return None.
2. define frequency_dict dictionary which will collect character with frequency.
3. create a variable called current_highest and initially assign it first element of list
4. create a loop with number of list element times. 
5. if element not present in frequency_dict then add property and it's value 1
6. else increase frequency count for the char
7. inside loop check if element current_highest value is greater in frequency_dict or the current element.
8. if current element has higher value in frequency_dict assign it to current_highest
9. finally return current_highest after loop is done.
'''