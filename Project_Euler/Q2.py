# 2번 문제

num_list = [1,2]
num = 0
n = 0
sum = 0

while num_list[n+1] <= 4000000 :
    num = num_list[n] + num_list[n+1]
    num_list.append(num)
    n += 1

print(num_list)

# [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887]

for i in num_list :
    if (i % 2 == 0) and (i <= 4000000) :
        sum += i

print(sum)

# 4613732