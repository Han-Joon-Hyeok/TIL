# 4강 재귀 알고리즘

재귀 알고리즘이란 `재귀 함수(recursive function)`에 의해 구현되는 알고리즘을 의미한다.

## 재귀 함수(Recursive Function)

하나의 함수에서 자신을 다시 호출하여 작업을 수행하는 함수이다. 재귀의 사전적 정의는 `원래의 자리로 되돌아가거나 되돌아옴`이다. 일반적인 함수는 한번 `return`을 하면 종료가 되는 반면, 재귀 함수는 `return`을 해도 다시 자기 자신을 다시 호출하여 연산을 수행한다. 

하지만 자기 자신을 반복해서 호출한다면, 영원히 종료할 수 없는 상태에 빠지게 된다. 따라서 재귀 함수에서는 함수가 **종료되는 조건**을 설정해주는 것이 가장 중요하다.

### 예시(1) - 이진 트리(Binary Tree)

재귀 함수의 원리를 이용해서 이진 탐색과 비슷한 이진 트리를 생성할 수 있다. 

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619336-e8ae9d00-5e34-11eb-8ebc-e28c21926e48.png">
</p>

위의 그림처럼 왼쪽 노드는 부모 노드보다 작은 원소들, 오른쪽 노드는 부모 노드보다 큰 원소들로 구성한다는 원칙을 세웠다고 해보자.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619357-29a6b180-5e35-11eb-8d41-efc56ac11856.png">
</p>

하위 노드들도 마찬가지로 똑같은 원리로 생성을 하면 위와 같은 트리가 완성이 된다. 그리고 12를 기준으로 왼쪽에 있는 노드들은 모두 12보다 작은 수들로 구성되고, 마찬가지로 오른쪽에 있는 노드들은 모두 12보다 큰 수들로 구성이 된다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619380-6a9ec600-5e35-11eb-9079-434b1719a5c0.png">
</p>

이때, 10을 찾고자 할 때는 루트 노드부터 검사를 시작해서 이진 탐색과 비슷한 원리로 재귀적으로 값을 비교하여 

### 예시(2) - 자연수의 합 구하기

1부터 n까지 모든 자연수의 합을 구한다고 해보자. 수식으로 표현하면 아래와 같이 시그마로 표현할 수 있을 것이다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619477-337ce480-5e36-11eb-8c32-da9c0506139e.png">
</p>

1부터 n까지 순차적으로 값을 더해서 나갈 수도 있지만(왼쪽 수식), n과 n-1의 시그마 합으로 표현할 수도 있다(오른쪽 수식).

이를 파이썬으로 표현하자면 다음과 같다.

``` python
def sum(n) :
    return n + sum(n-1)
```

하지만 위의 함수를 그대로 이용한다면 앞서 말했던 것처럼 무한 반복의 늪에서 벗어나지 못하게 된다. 따라서 종료 조건을 설정해주어야 한다.

``` python
def sum(n) :
    if n<=1 :
        return n
    else :
        return n + sum(n-1)
```

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619625-c79b7b80-5e37-11eb-90f4-cb31a9f04f58.png">
</p>

위의 그림처럼 `sum(n)` 함수를 계속 호출하다가, 1에 도달하면 다시 호출된 함수를 거꾸로 거슬러 올라가면서 값들을 모두 더하면서 함수가 종료된다.

### 재귀 알고리즘의 효율

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619642-219c4100-5e38-11eb-8c9b-787a48482d0f.png">
</p>

자기 자신을 반복적으로 호출하는 재귀 알고리즘(recursive)나 루프를 돌면서 연산을 수행하는 알고리즘((iterative)은 모두 n이 커질 수록 비례해서 시간이 오래 걸린다. 그래서 시간 복잡도는 `O(n)`으로 동일하다.

하지만, 효율성의 측면에서 봤을 떄는 재귀 함수가 `return`작업을 부가적으로 해주어야 하기 떄문에 `iterative function`이 낫다고 할 수 있다. 재귀 알고리즘은 사람이 인식하기에 직관적이지만, 효율적이지 못할 수도 있다는 단점이 있다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619718-c880dd00-5e38-11eb-84bd-b962bf4de3f9.png">
</p>

반면 공식을 사용해서 연산을 딱 한번만 할 수도 있다. 이를 알고리즘이라고 부르긴 어렵지만, 시간 복잡도가 `O(1)`이므로 효율성 측면에서는 앞의 두 알고리즘보다는 뛰어나다고 할 수 있다.

### 예시(3) - 팩토리얼 

``` python
def fact(n) :
    if n<=1 :
        return 1
    else :
        return n * fact(n-1)
```
자연수의 합을 구하는 시그마처럼 팩토리얼도 비슷한 원리로 재귀 함수를 구현할 수 있다.

## 실습 : 피보나치 수열

### 나의 풀이

``` python
def solution(x):
    if x == 0 :
        return 0
    elif x == 1 :
        return 1
    else :
        return solution(x-1) + solution(x-2)
```
직접 그림을 그려가면서 풀이를 해보았다. 

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105619980-2d3d3700-5e3b-11eb-9fd0-788a4b610607.png">
</p>

`n=0`이면 0을 반환하고, `n=1`이면 1을 반환한다. 그리고 `n>=2`일 때는 재귀 함수를 호출하여 값을 더하도록 하였다. 

사람이 계산할 때는 n이 0부터 계산을 시작하지만, 컴퓨터는 n이 x(인자값)부터 시작해서 1씩 감소한다는 점을 생각하면서 풀었다.

### 다른 사람들의 풀이

``` python
def solution(x):
    if x<=1 :
        return x
    else :
        return solution(x-1) + solution(x-2)
```

종료 조건이 어차피 0과 1일때 각각 0, 1을 반환하면 되기 때문에 조금 더 간단하게 if 조건을 작성할 수 있다.