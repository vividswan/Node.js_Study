var express = require("express"); // express 라는 모듈을 로드
var app = express(); // express 모듈이 application return, express의 규칙임(특정 원리 x)
app.use(express.static("public"));
// 정적인 파일이 위취할 디렉토리를 지정하는 기능(관습적으로 public)

// get method : router라 부르고 routing(길을 찾는다.)한다고 함 => 요청이 들어왔을 때 연결해주는 역할

app.get("/", function(req, res) {
  // get => 사용자가 웹서버에 접속하는 방식 중 하나(url을 치고 접속하는 방식)
  res.send("Hello home page");
}); // home으로 접속하면 function이 보내는 인자(request, response)가 실행
// request => 요청에 대한 객체, response => 응답에 대한 객체

app.get("/route", function(req, res) {
  res.send('Hello Router, <img src="/sampleImage.jpg">');
});

app.get("/login", function(req, res) {
  // localhost:3000/login
  res.send("<h1>Login please</h1>"); // html 태그 사용 가능!
});
app.listen(3000, function() {
  // 3000 => listening 하는 포트
  console.log("Connected 3000 port!");
  // listening이 성공했을 때 실행되는 function
});
