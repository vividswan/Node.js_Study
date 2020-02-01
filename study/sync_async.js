var fs = require("fs");

// Sync
console.log(1);
var data = fs.readFileSync("data.txt", { encoding: "utf8" });
// utf8 => data.txt를 utf8 방식으로 저장, 읽어올때도 utf8 방식으로 읽어와야한다.
console.log(data);

// Async
console.log(2);
fs.readFile("data.txt", { encoding: "utf8" }, function(err, data) {
  // 콜백함수 => 첫 번째 인자로 에러가 있으면 에러메세지, 두 번째 인자로 성공한다면 데이터를 받는다.
  console.log(3);
  console.log(data);
});
console.log(4); // 2,4,3 순으로 호출됨!!
