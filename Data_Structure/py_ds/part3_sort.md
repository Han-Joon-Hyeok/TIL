# 3강 정렬과 탐색

## 정렬

배열을 정렬한다는 것은 배열 안에 들어있는 원소들을 정해진 규칙에 따라 새롭게 늘어놓는 것을 의미한다.

``` text

배열 L = [4,3,7,2,9,6]

--> 오름차순으로 정렬 시 [2,3,4,6,7,9]
--> 내림차순으로 정렬 시 [9,7,6,4,3,2]

```
파이썬에서는 리스트를 정렬하는 방법으로 2가지가 있다.

1. sorted()
   - 내장 함수(built-in function)
   - 정렬된 새로운 리스트를 반환한다.
2. sort()
   - 리스트의 메서드(method)
   - 해당 리스트를 정렬하여 반영함.

``` python

L = [4,3,7,2,9,6]

# sorted()
L2 = sorted(L)
L2

## [2,3,4,6,7,9]

# sort()
L.sort()
L

## [2,3,4,6,7,9]
```

### 정렬 속성 값

정렬은 기본적으로 오름차순으로 정렬을 한다.
반대로 하고 싶다면 `reverse=True`를 주면 된다.
``` python

L2 = sorted(L, reverse=True)
L.sort(reverse=True)

## [9,7,6,4,3,2]

```

### 문자열로 이루어진 리스트

정렬 순서는 사전 순서(알파벳 순서)를 따른다. 문자열이 길다고 해서 더 큰 것이 아니다.

`gkswnsgur`이 `abcd`보다 작다는 것을 의미한다. 그래서 `sort()`를 사용하면 `abcd`가 가장 앞으로 정렬이 된다.

만약 문자열 길이 순서로 정렬하려면 정렬에 이용하는 `키(key)`를 지정하면 된다.

``` python
L = ['abcd', 'xyz', 'spam']
sorted(L, key=lambda x: len(x))
# ['xyz', 'abcd', 'spam']

만약 리스트의 순서가 다음과 같다면,

L = ['spam', 'xyz', 'abcd']
sorted(L, key=lambda x:len(x))
# ['xyz', 'spam', 'abcd']

문자열의 대소관계에 상관없이, 문자열의 길이를 기준으로 정렬을 하게 된다.
```

리스트 안에 포함된 딕셔너리 값들을 기준으로 하고 싶다면 다음과 같이 사용할 수 있다.

``` python
L = [
    {'name':'Kim', 'score':90},
    {'name':'Joon', 'score':50}
]

# 이름 기준으로 오름차순 정렬
L.sort(key=lambda x: x['name'])
## [{'name': 'Joon', 'score': 50}, {'name': 'Kim', 'score': 90}]


# 성적 기준으로 내림차순 정렬
L.sort(key=lambda x: x['score'], reverse=True)
## [{'name': 'Kim', 'score': 90}, {'name': 'Joon', 'score': 50}]
```

## 탐색 알고리즘

### 1. 선형 탐색(Linear Search)

특정 값을 찾기 위해서 리스트의 맨 처음부터 탐색을 하기 때문에 리스트의 길이에 비례하는 시간이 소요된다. 

만약 탐색하는 값이 존재하지 않거나, 리스트의 맨 끝에 존재하는 경우에는 리스트의 모든 원소를 비교해야 하는 상황이 생긴다.

이러한 최악의 상황의 시간 복잡도를 `O(n)` (Big-O Notation)으로 표현한다. 이에 대한 자세한 설명은 추후에 다루도록 한다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105575559-db9b9a80-5daf-11eb-8e4d-a7ceed7eae2f.png">
    <p align="center"><a href="http://bigocheatsheet.com/">http://bigocheatsheet.com/</a></p>
</p>

선형 탐색을 파이썬 코드로 나타내면 다음과 같다.

``` python
def linear_search(L, x):
    i = 0
    while i < len(L) and L[i] != x :
        i += 1
    if i < len(L) :
        return 1
    else : 
        return -1
```
L은 인자로 넘겨받는 리스트, x는 탐색 대상이다.

리스트 L을 처음부터 순서대로 인덱스 값인 i를 1씩 증가시키면서 일치하는 값을 찾도록 while 루프를 돌린다. 일치하는 값을 찾거나, 일치하는 값이 없다면 루프를 빠져나온다.

다음으로 if 조건문으로 들어가는데, 만약 i가 리스트 길이(`len(L)`) 내에 존재했다는 것은 일치하는 값을 찾았으므로 1을 반환한다. 반대로 값을 찾지 못했다면 -1을 반환한다.

### 2. 이진 탐색(Binary Search)

탐색하려는 리스트가 이미 정렬이 되있는 경우에만 적용 가능한 탐색 알고리즘이다. 리스트를 정렬 시켜 놓고, 탐색하려는 값을 절반씩 분할하여 탐색하는 방식이다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105575789-7c3e8a00-5db1-11eb-8d67-ae004c9b5b81.png">
</p>

정렬된 리스트에서 30을 찾고자 할때, 맨 앞에서부터 탐색하는 선형 탐색보다 리스트의 중간에 위치한 24부터 시작하면 탐색 시간을 단축시킬 수 있다.

탐색하고자 하는 30이 중간에 위치한 24보다 크므로 24보다 뒤에 있다는 것을 알 수 있으므로, 24보다 작은 수들은 탐색 대상에서 제외를 한다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105575805-a4c68400-5db1-11eb-9a3a-2172f2860b05.png">
</p>

그러면 남은 원소들 중에서 앞선 중간값이 이제 가장 낮은 값이 되고, 그 중간에 있는 값을 다시 탐색을 한다. 이때, `8+15 = 23`이고, 반으로 나누면 `11.5`가 되는데, 이때는 반내림을 한 정수인 `11`로 계산한다.

중간값인 34는 30보다 크므로 34보다 작은 수를 탐색하면 된다. 이때는 middle값이 upper로 바뀐다.

<p align="center">
    <img src="https://user-images.githubusercontent.com/54902347/105576064-8e212c80-5db3-11eb-896e-71d885f54bfe.png">
</p>

중간값이 30이므로 탐색 조건을 만족하게 된다. 이렇게 하면 훨씬 더 빠르게 탐색이 가능하다.

이처럼 한 번 비교가 일어날 때마다 리스트를 반으로 줄이는 것을 `Divide & Conquer(분할정복)`이라고 하며, 시간복잡도는 `O(log n)`으로 표현한다.

그래서 이진 탐색이 선형 탐색보다 빠른 것이 사실이지만, 항상 이진 탐색을 적용하는 것이 능사는 아니다. 배열을 정렬하는데도 시간이 소요되므로, 상황에 맞는 탐색법을 적용하는 것이 중요하다.

## 이진탐색 풀이

### 나의 풀이

``` python
def solution(L, x):

    lower = 0
    upper = len(L)-1


    while upper - lower != 1   :
        middle = (lower + upper) // 2
        # print("lower : %d, upper : %d, middle : %d" % (lower, upper, middle))
        if x < L[middle] :
            upper = middle
        elif x > L[middle] :
            lower = middle
        else :
            return middle

    return -1
```

- 처음에 while 조건을 `lower <=upper`로 설정했으나, 루프를 빠져나오지 못하는 문제에 마주쳤다.
- 그래서 `print`로 변수 값을 찍어보니 `lower`와 `upper`가 1만큼 차이가 나면 더 이상 탐색이 불가능하다는 것을 발견했다.
- 그래서 while 조건을 `upper - lower != 1`을 주었더니 통과했다.

사실 이건 이진 탐색을 제대로 이해하지 못하고 우연히 발견한 답이라서 제대로 된 풀이는 아니다.

### 다른 사람들의 풀이

``` python
def solution(L, x):

    lower = 0
    upper = len(L)-1


    while lower >= upper :
        middle = (lower + upper) // 2
        # print("lower : %d, upper : %d, middle : %d" % (lower, upper, middle))
        if x < L[middle] :
            upper = middle - 1
        elif x > L[middle] :
            lower = middle + 1
        else :
            return middle

    return -1
```

- middle값을 계산할 때, 중간값이 탐색값보다 작을 경우에는 `lower = middle + 1`를 해주고, 반대는 `upper = middle - 1`을 해준다.
- 인덱스의 범위를 하나씩 올려주거나 내려줘야 배열의 범위가 줄어들기 때문에 위와 같은 계산이 필요하다.