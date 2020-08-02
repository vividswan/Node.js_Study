let test = [1, 2, 3, 4];
console.log(test);
// [ 1, 2, 3, 4 ]
test.push(5);
console.log(test);
// [ 1, 2, 3, 4 ]
test = test.concat(6, 7, 8);
// concat은 원래 배열을 바꾸지는 않는다.
console.log(test);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(test.indexOf(4));
// 3
console.log(test.indexOf(9));
// -1
let joinTest = test.join();
console.log(joinTest);
// 1,2,3,4,5,6,7,8
console.log(typeof joinTest);
// string