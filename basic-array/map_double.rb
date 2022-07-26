input = [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

# double_array = input.map do |number|
#   number *= 2
# end

double_array = input.map {|number| number * 2}
pp double_array
