# 간단한 게시판 만들기 과제

## 공부해야할 것

- 유사배열
- 배열 기본 메서드(forEach와 map)
- js에서 DOM에 접근하기
- DOM을 동적으로 추가하기
- api
- fetch 함수

## 흐름

- `index2.html`의 잘못된 코드 때문에 `javascript`에서 DOM에 접근할 수 없다. 구글링을 통해 해결해보자.
- 게시판이니까 여러가지 post를 보여줘야 한다. 따라서 `post 객체`를 만들어보자.
- `post 객체`를 통해서 새로운 `post DOM`을 만드는 함수를 만들어보자. 이 함수는 꼭 `post 객체`만 인자로 받아야 올바른 값을 반환한다.
- `fetch` 함수를 통해 받아온 정보들로 `post 인스턴스`를 만들고 `post DOM`을 만드는 함수의 인자로 `post 인스턴스`를 전달하고 반환값으로 나오는 `post DOM`을 `index.html`에 추가하자.

## fetch 힌트

```javascript
fetch("https://jsonplaceholder.typicode.com/posts").then(function (response) {
  console.log(response.json());
});
```

위 코드를 통해서 어떤 값이 넘어오는지 확인해보자.
