let test = [1, 2, 3, 4, 5];
let mapTest = test.map(function (value, index) {
  return value * 2;
});

console.log(mapTest);
// [ 2, 4, 6, 8, 10 ]