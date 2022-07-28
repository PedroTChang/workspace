# Write a function that returns the greatest value from an array of numbers.
# 
# Input: [5, 17, -4, 20, 12]
# Output: 20

numbers = [5, 17, -4, 20, 12]

index = 0
max = numbers[0] 
while index < numbers.length
  if numbers[index] > max
    max = numbers[index]
  end
  index += 1
end
p max
