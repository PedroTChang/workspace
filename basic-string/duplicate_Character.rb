def first_duplicate_finder(input_string)
   previous_char = ""
 
   input_string.each_char do |char|
     if char == previous_char
       return char
     else
       previous_char = char
     end
   end
 
   return nil
 end

p first_duplicate_finder("abcdefghhijkkloooop") #=> "h"

