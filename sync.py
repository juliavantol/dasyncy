import datetime

start_video = 13
start_audiotrack = 4

time_string = []

begin = 00:12:45
end = 00:24:30
sum = begin + end



real = ["37.15"]


time_string.append(str(sum))

sec = time_string[0][-2] + time_string[0][-1]
seconds = int(sec)


print("actual answer: ", real)
print("calculated answer: ", time_string)

