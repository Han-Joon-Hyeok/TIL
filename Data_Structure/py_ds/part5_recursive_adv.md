# 5강 : 재귀 알고리즘 응용

앞서 살펴본 `피보나치 수열`, `팩토리얼`, `시그마` 알고리즘처럼 재귀적으로 구현할 수 있는 다양한 알고리즘들이 존재한다. 물론 `Recursive`가 `Iterative` 방식보다 처리 시간은 오래 걸릴 수 있으나, 직관적으로 이해하기에는 분명한 장점이 존재한다.

`조합`, `하노이의 탑`도 재귀적으로 구현할 수 있다.

## 조합(Combination)

조합이란 **서로 다른 n개 중에서 r개를 선택하는 경우의 수**이다. (순서 상관 없음)

고등학교 수학에서 조합 문제를 풀 때 열심히 분자와 분모를 써가며 게산했던 공식이 있다.

![Combination(1)](images/5_combination(1).png)

앞에서 살펴본 것처럼 `팩토리얼`도 재귀함수로 구현할 수 있기 때문에 이 방법으로 답을 찾아낼 수는 있지만, **숫자가 커질 수록 계산에 상당한 부하가 걸리는 문제**가 생긴다.

대신, 우리가 잘 사용하지 않았던 다음의 공식을 사용하면 조합을 재귀적으로 구현할 수 있다.

$$_nC_r = _{n-1}C_{r-1} + _{n-1}C_{r}$$

### 재귀적으로 조합 알고리즘 구현하기 

간단한 예시로 (1,2,3) 중에서 2개를 뽑아야 한다고 해보자.

![Combination(2)](images/5_combination(2).png)

(1,2), (1,3), (2,3) 총 3가지의 경우의 수가 나오는데, 이를 다시 쪼개서 살펴보자.

- 우선 `1`을 먼저 확정적으로 선택하고, **나머지 2개 중에서 1개만 선택**하면 되므로 경우의 수는 $_2C_1$이다. (초록색)
- 다음으로 `1`을 제외하고, **나머지 2개 중에서 2개를 선택**하면 되므로 경우의 수는 $_2C_2$이다. (노란색)

![Combination(3)](images/5_combination(3).png)

그러면 $_2C_2 = 1 (\because n=r) $이고,  다시 $_2C_1$은 위의 공식을 다시 이용하면 다음과 같이 쪼개진다.

![Combination(4)](images/5_combination(4).png)

$_1C_0$은 하나도 뽑지 않는 사건이기 때문에 $_1C_0 = 1$이 된다. 마찬가지로 $_1C_1 = 1$이므로 이제 더 이상 쪼갤 수 없는 상태에 도달하게 되었다.

이처럼 $_{n-1}C_{r-1}$이 최종적으로 쪼갤 수 없는 $_nC_0$에 도달할 때까지 반복해서 계산을 한다.

이를 파이썬 코드로 작성하면 다음과 같이 작성할 수 있다.

``` Python
def combi(n, r) : 
    if n == r or r == 0 :
        return 1
    else :
        return combi(n-1, r-1) + combi(n-1, r)
```

~~(사실 나는 고등학교 때 확률과 통계 부분을 특히 싫어해서 공부를 제대로 안했는데, 이렇게 만나게 될 줄은 상상도 못했다...)~~

## 하노이의 탑

`하노이의 탑`은 재귀 알고리즘 연습할 때 가장 유명한 문제이다. 원판을 최소한의 움직임으로 모두 옮기는 문제인데, 재귀 알고리즘으로 구현해보자.


### 나의 풀이

``` Python 
def hanoi(n, start, by, to) :
    if n==1:
        print("기둥 %d의 원반을 기둥 %d로 옮긴다." % (start, to))
    elif n==2:
        print("기둥 %d의 원반을 기둥 %d로 옮긴다." % (start, by))
        print("기둥 %d의 원반을 기둥 %d로 옮긴다." % (start, to))
        hanoi(n-1, by, start, to)
    else:
        hanoi(n-1, start, to, by)
        hanoi(1, start, by, to)
        hanoi(n-1, by, start, to)

    
n = int(input("원판의 개수를 입력하세요 : "))
hanoi(n, 1, 2, 3)
```
### 다른 사람의 풀이

``` Python
MSG_FORMAT = "{}번 원반을 {}에서 {}로 이동"

def move(n, start, to):
    print(MSG_FORMAT.format(n, start, to))

def hanoi(n, start, to, via):
    if n == 1:
        move(1, start, to)
    else:
        hanoi(n-1, start, via, to)
        move(n, start, to)
        hanoi(n-1, via, to, start)

hanoi(3, 1, 2, 3)

# 참고 : https://shoark7.github.io/programming/algorithm/tower-of-hanoi
```

자세한 설명은 다시 작성할 예정

## 연습문제 : 재귀적 이진 탐색 구현

이진 탐색 문제를 재귀적으로 구현하는 문제이다. 빈칸만 채우는 간단한 문제여서 비교적 쉽게 풀 수 있었다.
### 나의 풀이

``` Python
def solution(L, x, l, u):
    if L[l] > x or L[u] < x : # 빈칸 1
        return -1
    mid = (l + u) // 2
    if x == L[mid] :
        return mid
    elif x < L[mid] :
        return solution(L, x, l, mid-1) # 빈칸 2
    else :
        return solution(L, x, mid+1, u) # 빈칸 3
```

- `빈칸 1`
  - 처음에는 `if x not in L`으로 조건을 작성했다. 하지만 이 방법은 재귀적으로 처리할 때마다 **리스트의 모든 원소들을 살펴봐야 하기 떄문에** 효율적이지 못한 방법이다. 실제로 채점을 해보면 정답은 맞지만, 효율성 테스트에서 모두 시간초과로 실패하였다.
  - 그래서 함수가 호출될 떄마다 리스트의 최소값 또는 최대값이 변하므로, 호출되는 당시의 리스트에서 최소값과 최대값 2개만 탐색값과 비교를 했다.
  - 그림으로 살펴보면 다음과 같다.
  ![recursive_bin_search(1)](images/5_recursive_binsearch(1).png) 
  - 리스트에서 탐색값 `x`가 `L[l]`보다 작거나, `L[u]`보다 크면 탐색할 수 없다. 위의 그림에서는 `x = 7`이므로 리스트의 범위를 줄이고 탐색을 진행한다.
  ![recursive_bin_search(2)](images/5_recursive_binsearch(2).png) 
  - 하지만, 이번에는 `L[u] = 6`이므로 리스트의 범위에서 벗어나므로 `-1`을 반환해준다.
<br>
- `빈칸 2`, `빈칸 3`
  - 이미 이진탐색에서 진행했던 내용을 복습하는 차원이었으므로, 크게 어렵지는 않았다.
  ![recursive_bin_search(3)](images/5_recursive_binsearch(3).png)

  - 먼저 ` x < L[mid]`인 경우면, 탐색값이 중간값보다 작다는 의미이므로 범위의 최대값을 줄여야 한다. 따라서 다음 함수의 `L[u]`은 `mid - 1`로, 이전 `mid`인덱스를 제외하고 탐색을 진행한다.
  
  ![recursive_bin_search(4)](images/5_recursive_binsearch(4).png) 
  - 다음으로 `x > L[mid]`인 경우에는 탐색값이 중간값보다 크다는 의미이므로 범위의 최소값을 증가시켜준다. 따라서 다음 함수의 `L[l]`는 `mid + 1`이 된다.