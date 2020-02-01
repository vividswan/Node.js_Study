/*
프로젝트 폴더를 npm package로 초기화 => npm init

독립적으로 실행되는, npm으로 만들어진 소프트웨어를 설치 => npm install sample

-g => 전역적으로 실행할 수 있게 설치

--save => pacage.json의 dependencies에 추가 => 의존성을 명시적으로 표시
프로젝트를 다른 디렉토리에서 사용할 때도 의존성을 갖고있는 패키지를 쉽게 가져올 수 있음
*/

var _ = require("underscore");
// require 함수는 underscore 모듈을 가져온 다음에, 그 모듈을 사용할 수 있는 객체를 return한다. (var _에 할당)
// uncerscoe는 보통 '_'로 변수명 선언
// underscore는 자바스크립트가 부족한 배열에 대한 기능을 보충해줌!
var arr = [3, 6, 9, 1, 12];
console.log(arr[0]); // 3 출력
console.log(_.first(arr)); // 3 출력
console.log(arr[arr.length - 1]); // 12 출력 (왜냐면 갯수는 1부터 출력)
console.log(_.last(arr)); // 12 출력
