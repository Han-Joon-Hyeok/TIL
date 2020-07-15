# 1번 문제

sum = 0
for i in range(1000) :
	if (i % 3 == 0) or (i % 5 == 0) :
		sum += i

print(sum)
# 결과 : 233168