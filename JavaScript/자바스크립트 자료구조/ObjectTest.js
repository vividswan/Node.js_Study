let test = {
  name: "vividswan",
  age: 29,
  info: { num: [1, 2, 3, 4], str: "abcde" },
};

console.log(test.name);
// vividswan
console.log(test["age"]);
// 29

for (value in test) {
  console.log(test[value]);
}
/*
  vividswan
  29
  { num: [ 1, 2, 3, 4 ], str: 'abcde' }
  */

Object.keys(test).forEach(function (value) {
  console.log(test[value]);
});
/*
  vividswan
  29
  { num: [ 1, 2, 3, 4 ], str: 'abcde' }
  */
