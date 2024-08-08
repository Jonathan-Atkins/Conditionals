
def time_of_day(hour)
    if hour >= 4  && hour < 12
        "Good morning!"
    elsif hour >= 12 && hour < 17
        "Good afternoon!"
    elsif hour >= 17 && hour < 20
        "Good evening!"
    elsif hour > 0 && hour < 25
        "Good Night."
    else hour <=0 || hour >= 25
        "Please enter a valid number"
    end
end

puts time_of_day(4)
puts time_of_day(13.30)
puts time_of_day(1)
puts time_of_day(22)
puts time_of_day(0)
puts time_of_day(25)

