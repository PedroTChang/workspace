# Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

# Input: ["a", "b", "c", "d"]
# Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]


# a b c d
# ^
#   ^ 
#     ^
#       ^
# ab, ac, ad, 
#
# write a function, that takes in an array
# write a function, that takes in an array and iterates through that array
# write a function, that takes in the first position in an array, and adds the rest of the elements of the array

def combination(array) 
  output = []
  index = 0
  while index < array.length
    index2 = 0
    while index2 < array.length
      if array[index] != array[index2]
        output << array[index] + array[index2]
      end
      index2 += 1
    end
    index += 1
  end
  return output
end
p combination(["a", "b", "c", "d"])
