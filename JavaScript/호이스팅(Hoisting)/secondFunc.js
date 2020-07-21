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
