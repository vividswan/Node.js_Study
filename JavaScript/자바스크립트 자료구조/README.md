---
layout: article
title: "[HTML/CSS/JS] 자바스크립트 자료구조"
tags:
  - HTML/CSS/JS
date: 2020-08-03T08:06:00-05:00
key: "[HTML/CSS/JS] 자바스크립트 자료구조"
---

## 자바스크립트 자료구조

자바스크립트가 자료구조를 다루는 여러 가지 방법을 알아보자.<br>

<!--more-->

## 배열 (Array)

- 배열 안에는 모든 타입이 들어갈 수 있다.(배열 안에 배열, 객체 등등 ..)
- new Array()로 선언 가능하지만 보통 `[]`로 선언한다.
- `push` 메서드를 통해 순차적으로 원소를 추가한다.
- `cocat`으로 배열을 합칠 수 있다.
- `indexOf(원소)`로 특정 값이 어느 인덱스에 있는지 확인한다.
  - 원소가 배열 안에 없으면 **-1을 출력하므로, 이를 통해 원소의 유무를 파악한다.**
- `join()` 을 통해 문자열로 합칠 수 있다.

```javascript
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
```

## forEach

- forEach로 배열을 순회할 수 있다.
- forEach 안에 인자로 함수가 들어갈 수 있다.
- function(value, index, object)

```javascript
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
```

## map

- value와 index를 인자로 하는 함수를 사용해서 map을 통해 새로운 배열을 반환할 수 있다.

```javascript
let test = [1, 2, 3, 4, 5];
let mapTest = test.map(function (value, index) {
  return value * 2;
});

console.log(mapTest);
// [ 2, 4, 6, 8, 10 ]
```
