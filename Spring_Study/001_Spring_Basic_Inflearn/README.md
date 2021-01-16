# 001_Spring_Basic_Inflearn

인프런 스프링 강의를 공부하며 배운 내용을 정리한 문서입니다.

- 강의 링크
    [스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술(김영한 님)](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%9E%85%EB%AC%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8/dashboard)

# 프로젝트 생성

- 준비물
  - IDE : IntelliJ(추천) 또는 Eclipse
  - Java 11 : 환경 변수 설정에서 해당 버전으로 바꾸어주어야 한다. (%JAVA_HOME%)

- 스프링 부트 스타터 사이트를 이용해서 스프링 프로젝트를 편리하게 생성할 수 있다.
  - https://start.spring.io/
    ![프로젝트 설정](사진/001_spring.io%20사용법(1).png)
  - Project : 라이브러리를 가져오고, 빌드하는 라이프 사이클까지 관리해주는 툴을 선택하는 것. 
    - 여기서는 `Gradle Project` 선택한다.
    - `Maven`은 과거에 주로 사용했다.
  - Language : `Java` 선택. 
    - 프로젝트에 따라서 다른 언어 선택하면 됨.
  - Spring Boot : 가장 최근 버전으로 선택하되, 버전 뒤에 붙은 SNAPSHOT 또는 M1이 붙지 않은 것을 선택한다.
    - `SNAPSHOT` : 현재 만들고 있는 버전.
    - `M1` : 정식 릴리즈 버전이 아님.
  - Project Metadata : 프로젝트 데이터에 대한 설명
    - `Group` : 보통 기업명을 넣음.
    - `Artifact` : 빌드 되었을 때의 결과물. 프로젝트 이름이라고 생각하면 됨.
    - `Package name` : 위의 두가지를 입력하면 알아서 자동으로 `Group.Artifact` 형태로 완성.
  - Dependencies : 사용할 라이브러리를 선택하는 옵션. 아래의 두 가지 입력하여 선택
    ![프로젝트 설정](사진/001_spring.io%20사용법(2).png)
    - `Spring Web`
    - `Thymeleaf` : HTML를 만들어주는 템플릿 엔진

위와 같이 설정하고, `GENERATE`를 클릭하면 압축파일(zip)로 다운받고, 압축해제.

