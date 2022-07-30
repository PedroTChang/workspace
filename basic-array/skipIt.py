# Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:
# 
# The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.
# 
# Input:
# [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]
# 
# Output:
# [2, 3, 1, 2, 2, 1, 5, 2, 2]



numbers = [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]
skipIt = []
index = 0
while (index < len(numbers)):
    skip = numbers[index] # this should start with equal to 2
    skipIt.append(skip) # then index + 2, or 0 + 2, which would be 3 gets shovelled, and then next time, the iteration would be
    index += 1
print(skipIt)


