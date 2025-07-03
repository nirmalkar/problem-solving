# create a dictonary object to hold unique numbers
# create an array which will be containing uniques numbers in the sequence
# create a loop to iterate through nums array, in every iteration
#  a. check if number is already there in the uniqueness_dict, if no then append it to unique_nums_arr and add it uniqueness_dict 
#  finally return unique_nums_arr

def remove_duplicates(numsArr):
    uniqueness_dict = {}
    unique_nums_arr = []
    for num in numsArr:
        if num not in uniqueness_dict:
            unique_nums_arr.append(num)
            uniqueness_dict[num] = True
    return unique_nums_arr
        


result = remove_duplicates([1,2,3,4,4,4,5,3,3,5,7,7,2])
print(result)