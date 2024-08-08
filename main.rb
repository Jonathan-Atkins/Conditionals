#Challenge 1 & 2
def this_is_a_string(str)
  "#{str}: is even"
end

input = "This is a string and it has a lot of words in it however if I add more to it it will be longer and boo"

if input.length.even?
  puts input.length.even?
  puts this_is_a_string(input)
  puts input.length
else
  puts false
  puts "There are #{input.length} characters in this string"
end


# puts "What hour is it?"
# hour = gets.chomp.to_i

# if hour > 0 && hour < 12
#   puts "Good morning!"
# elsif hour > 0 && hour < 17
#   puts "Good afternoon!"
# elsif hour >= 17 && hour < 24
#   puts "Good evening!"
# else hour <= 0 || hour >= 25
#     puts "Please enter a number between 1 and 24."
# end