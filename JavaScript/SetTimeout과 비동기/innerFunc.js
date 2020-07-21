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
