function* generatorTest() {
  yield 1;
  yield 2;
  yield 3;
}

var gen = generatorTest();
var result = gen.next().value;

console.log(result); // 1 출력
console.log(gen.next().value); // 2 출력
console.log(gen.next().value); // 3 출력
