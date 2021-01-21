# HTML

HTML을 공부하며 모르는 것, 새로 배운 것들을 위주로 정리한 문서입니다.

## 생활코딩 - HTML

강의 링크
- [생활코딩-HTML](https://opentutorials.org/course/2039)

### HTML(HyperText Markup Language)

HTML은 3가지로 구성되어 있다.
1. Hypertext : 하이퍼텍스트를 가장 중요한 특징으로 한다.
   - 하이퍼텍스트란 문서와 문서가 링크로 연결되어있다는 것을 의미한다.
2. Markup : 마크업이라는 형식을 가진
   - Markup이 있다면 Markdown도 있는데, 현재 작성하고 있는 문서가 Markdown이다. 둘의 개념에 대해서는 나중에 다룰 예정이다.
3. Language : 컴퓨터 프로그래밍 언어이다.
   - 프로그래밍 언어는 사람과 컴퓨터가 소통하기 위한 수단을 정해놓은 규칙이다.

즉, 문서들끼리 연결되어 있다는 특성을 HTML 프로그래밍을 통해서 HTML 코드로 작성하는 것이다.

### HTML 역사

1. GML (1960년대 말) : Markup 언어들의 시조.
2. SGML : 현재 HTML에서 사용하는 꺽쇠 형태를 사용
3. SGMLguid : SGML이 발전된 형태. `팀 버너스 리`가 유럽 입자 물리연구소에서 일을 하며 비공식적으로 웹을 만듬. 17개의 태그가 존재함.
4. HTML : SGMLguid에서 `a태그`를 추가해서 만든 것. 웹의 발전에 있어서 `a태그`는 기존의 기술들과 구분되는 중요한 특성을 가지게 되었다.

조금 더 자세한 HTML 역사와 HTML 통계 결과는 아래의 링크에서 확인할 수 있다.

- [HTML 연대기](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html) : HTML 1 버전부터 5 버전까지 HTML 태그의 역사에 대해 보여준다.
- [HTML 통계](https://www.advancedwebranking.com/html/) : 자주 쓰이는 태그와 속성들을 통계로 정리해놓은 사이트. 어떤 태그가 자주 쓰이고, 중요한지 파악할 수 있음.


### HTML 문법

#### `<a>`태그

a태그는 `anchor(닻)`의 맨 앞글자인 a를 의미한다. 즉, 특정 URL에 연결되어 있다는 것으로 해석할 수 있다.

`<a href="연결할 링크" target="_속성값" title="hover시 표시되는 문구">`

속성들의 순서는 전혀 상관없다. 

- target : 링크된 문서를 클릭했을 때, 문서가 열릴 위치를 명시해준다.
  |속성값|설명|
  |--|--|
  |_blank|링크된 문서를 새로운 윈도우나 탭에서 오픈함.|
  |_self(기본값)|링크된 문서를 링크가 위치한 현재 프레임에서 오픈함. 생략 가능. |
  |_parent|현재 프레임의 부모 프레임에서 오픈.|
  |_top|현재 윈도우 전체에서 오픈.|
  |프레임 이름|명시된 프레임에서 오픈. `<iframe>`과 함께 사용할 수 있지만, 최근에는 보안 문제로 사용하지 않는 것을 권장하고 있음.</iframe>|


#### `<p>` 태그

`Paragraph`의 맨 앞 글자인 p를 따서 만든 태그로, 단락을 의미한다. 블록 요소이기 때문에 다음 요소에 대해서는 자동으로 줄 바꿈이 수행되며, `<br>`태그가 2번 들어간 효과와 동일하다.

```HTML
<p>안녕하세요</p>
<p>반갑습니다</p>
<p>또 만나요</p>

<!-- 결과 -->
안녕하세요

반갑습니다

또 만나요
```

#### `<br>` 태그

`<br>`은 `A forced line-break`의 줄임말로, 1줄을 강제로 바꾸어버리는 태그이다. 위치에 상관없이 태그 내부, 태그 사이에서 모두 동일하게 적용할 수 있다. 태그를 연속해서 사용할 경우, 사용한 횟수만큼의 줄 간격이 벌어진다.

```HTML
<!-- 태그 사이에서 사용 -->
<a>foo</a><br>
<a>bar</a>

<!--결과-->
foo
bar

<!-- 태그 안에서 사용 -->
<a>foo<br>
bar
</a>

<!--결과-->
foo
bar

<!-- 여러 번 사용 -->
<a>foo</a><br><br><br><br>
<a>bar</a>

<!--결과-->
foo



bar
```
보통 하나의 단락을 표현할 때는 `<p>`태그를 사용하며, `<br>`을 이용한 단락 구분은 잘 사용하지 않는다.

만약 `<p>`태그의 단락 여백이 마음에 들지 않는다면, css의 `margin`이나 `padding` 속성값을 수정해서 조정할 수 있다.

##### [참고]
블록 요소는 `margin`, `padding`이 모두 작동하지만, 

인라인 요소는 `margin-left`, `margin-right`는 작동하지만, `margin-top`, `margin-bottom`은 작동하지 않는다. 

![p태그_margin](https://user-images.githubusercontent.com/54902347/105321407-c2a5b480-5c0a-11eb-8f50-72248efaf0fb.png)


만약 인라인 요소에도 적용하고 싶다면, `display`속성을 `block`이나 `inline-block`으로 변경하면 된다.


### HTML 구조

``` HTML
<!DOCTYPE HTML> 
<!-- 브라우저에 HTML 문서가 어떤 표준에 맞추어 작성되었는지 알려주는 역할을 한다. ex)XHTML1.0 
 HTML5에서는 DOCTYPE HTML로 통합되었다.  -->
<html> : HTML 문서 전체를 감싸는 역할을 한다.
<head>
   <!-- 본문을 꾸미거나, HTML에 대한 부가정보를 포함한다. -->
   <title>웹 브라우저에서 표시될 제목</title>
   <meta charset="utf-8"> // 본문의 인코딩을 utf-8로 지정한다.
</head>
<body>
   HTML 본문에 해당하는 내용이 들어간다.
</body>
</html>
```