// 함수 선언문
function fristFunc() {
  innerFunction();
  function innerFunction() {
    console.log("firstFunc innerFuncion!");
  }
}

// 함수 호출
fristFunc();
