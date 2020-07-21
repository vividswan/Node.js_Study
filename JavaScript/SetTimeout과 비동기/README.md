## SetTimeout과 비동기

자바스크립트의 전역 객체인 window의 SetTimeout을 사용하면 비동기적인 실행 순서를 확인할 수 있다.

<!--more-->

### setTimeout

```javascript
window.setTimeout();
setTimeout();
```

window는 자바스크립트의 전역 객체이므로, 생략이 가능하다.<br>
setTimeout은 두 개의 인자를 받는다.<br>
첫 번째 인자는 함수,<br>
두 번째는 setTimeout이 호출되고 난 이후 첫 번째 인자로 받은 함수가 실행될 시간(밀리 세컨드)를 받는다.<br>

### 비동기적 실행

```javascript
function innerFunc() {
  console.log("innerFunc 실행");
}

console.log("프로그램 실행");
setTimeout(innerFunc, 2000);
console.log("프로그램 종료");
```

간단한 함수를 만들고, setTimeout 안에 함수와 시간을 2초로 설정했다.<br>
동기적인 실행 결과를 생각한다면, "프로그램 실행" 뒤 2초 뒤에 "innerFunc 실행", 그리고 "프로그램 종료"가 나올 것 같다.<br>
실행 결과를 확인해보자.<br>

> 프로그램 실행 <br> 프로그램 종료 <br> innerFunc 실행 <br>

순차적으로 진행될 것 같은 소스와는 달리, setTimeout은 비동기적인 순서로 실행을 지원하기 때문에,<br>
프로그램 실행, 종료가 먼저 콘솔에 나타나고, 2초 뒤 innerFunc가 실행되었다.<br>

### 스택과 이벤트 큐

```javascript
function innerFunc() {
  console.log("innerFunc 실행");
}

console.log("프로그램 실행");
setTimeout(innerFunc, 0);
console.log("프로그램 종료");
```

만약 위처럼 시간을 0으로 바꿔도 innerFunc가 2초에서 대기 시간이 줄어들 뿐, 실행 결과는 동일하다.<br><br>

비동기 함수의 경우엔, 스택에서 바로 실행되는 것이 아니라 `이벤트 큐`에 미리 저장을 해둔다.<br>
스택에 쌓여있는 코드들이 모두 실행된 후, 이벤트 큐에 있는 것들을 처리하기 때문에, 0초 뒤 실행을 해도 비동기적으로 처리되는 것이다.<br>

```javascript
function innerFunc() {
  console.log("innerFunc 실행");
}

function asyncTest() {
  console.log("asyncTest 실행");
  setTimeout(innerFunc, 2000);
  // 이벤트 큐에 저장
  console.log("asyncTest 종료");
}

console.log("프로그램 실행");
asyncTest();
console.log("프로그램 종료");
```

위의 코드도 실행해보면, `setTimeout(innerFunc, 2000);` 외 엔 모두 스택에서 바로 실행되므로,<br>

> 프로그램 실행<br> asyncTest 실행<br> asyncTest 종료<br> 프로그램 종료<br> innerFunc 실행<br>

이러한 실행 결과를 확인할 수 있다.<br>
