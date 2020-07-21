## 호이스팅 (Hoisting)

자바스크립트는 함수가 실행되기 전 함수 내의 필요한 변수값들을 미리 모아서 선언하는데, 이것을 **호이스팅(Hoisting)** 이라고 한다.

<!--more-->

### 미리 선언된 함수를 사용

```javascript
// 함수 선언문
function fristFunc() {
  innerFunction();
  function innerFunction() {
    console.log("firstFunc innerFuncion!");
  }
}

// 함수 호출
fristFunc();
```

위의 자바스크립트 소스를 확인해보자.<br>
함수의 선언이 끝나고, 마지막 줄 `fristFunc();` 로 인해 firstFunc를 불러온다.<br>
fristFunc()가 순차적으로 실행한다면, 함수를 부르는 `innerFunction();`가 먼저 나오기 때문에 오류가 날 것 같지만,<br>
실행시켜보면 콘솔창에 `firstFunc innerFuncion!`가 잘 나옴을 알 수 있다.<br>
함수를 실행 전, 함수에 대한 내용을 프로그램이 확인하고 innerFunction을 미리 선언해주었기 때문에 가능하다.<br>

### 함수 표현식과 호이스팅

```javascript
// 함수 선언문
function innerFunction() {
  console.log("firstFunc innerFuncion!");
}
```

앞선 소스처럼 이렇게 함수를 나타내면 함수 선언문이지만,<br>

```javascript
// 함수 표현식
const innerValue = function innerFunction() {
  console.log("firstFunc innerFuncion!");
};
```

이런 방식을 함수 표현식이라고 하는데, 호이스팅을 생각할 때, 함수 표현식에선 주의를 해야한다.<br>

```javascript
// 함수 선언식
function secondFunc() {
  innerValue();
  // 함수 표현식
  const innerValue = function innerFunction() {
    console.log("firstFunc innerFuncion!");
  };
}

// 함수 호출
secondFunc();
```

위의 소스를 실행하면 `Cannot access 'innerValue' before initialization` 라는 메세지가 뜨고 실행이 안된다.<br>
많이 햇깔릴 수도 있는 부분인데, 함수 표현식을 사용한다면,<br>
호이스팅 과정에서는 **함수 function innerFunction() 가 아닌, 변수 const innerValue만 미리 선언해두기 때문에** 오류가 발생한다.<br>
주의를 해서 사용해야한다.<br>
