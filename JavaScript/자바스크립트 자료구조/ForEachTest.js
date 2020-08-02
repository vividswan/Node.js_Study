let test = [1, 2, 3, "able", [1, 2, 3]];
test.forEach(function (value, index, object) {
  console.log(value, index, object);
});

// 순차적으로 value, index, 배열 전체가 출력
/*
1 0 [ 1, 2, 3, 'able', [ 1, 2, 3 ] ]
2 1 [ 1, 2, 3, 'able', [ 1, 2, 3 ] ]
3 2 [ 1, 2, 3, 'able', [ 1, 2, 3 ] ]
able 3 [ 1, 2, 3, 'able', [ 1, 2, 3 ] ]
[ 1, 2, 3 ] 4 [ 1, 2, 3, 'able', [ 1, 2, 3 ] ]
*/