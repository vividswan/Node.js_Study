var express = require("express"); // express 라는 모듈을 로드
var app = express(); // express 모듈이 application return, express의 규칙임(특정 원리 x)
var bodyParser = require("body-parser");
app.locals.pretty = true; // jade express code pretty
app.set("view engine", "jade"); // jade를 setting
app.set("views", "./views"); // jade 파일이 들어있는 디렉토리(관습적으로 views)
app.use(express.static("public"));
// 정적인 파일이 위취할 디렉토리를 지정하는 기능(관습적으로 public)
app.use(bodyParser.urlencoded({ extended: false }));
// bodyParser 모듈을 app 객체에 use
app.get("/form", function(req, res) {
  res.render("form");
});
app.get("/form_receiver", function(req, res) {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + "," + description);
});
app.post("/form_receiver", function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + "," + description);
});
app.get("/topic/:id", function(req, res) {
  // req.query.id => query라는 객체에 id라는 property
  var topics = ["Javascript is ...", "Nodejs is...", "Express is..."];
  var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}
  `;
  res.send(output);
});

app.get("/topic/:id/:mode", function(req, res) {
  res.send(req.params.id + "," + req.params.mode);
});

// get method : router라 부르고 routing(길을 찾는다.)한다고 함 => 요청이 들어왔을 때 연결해주는 역할

app.get("/template", function(req, res) {
  res.render("temp", { time: Date(), _title: "Jade" });
  // 2번 째 인자는 jade 파일 안에 있는 변수로 전달(데이터주입)
});
app.get("/", function(req, res) {
  // get => 사용자가 웹서버에 접속하는 방식 중 하나(url을 치고 접속하는 방식)
  res.send("Hello home page");
}); // home으로 접속하면 function이 보내는 인자(request, response)가 실행
// request => 요청에 대한 객체, response => 응답에 대한 객체

app.get("/dynamic", function(req, res) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
      <h1>Hello, Dynamic!</h1>
      <ul>
      ${lis}
      </ul>
      ${time}
  </body>
</html>
`;
  res.send(output);
});

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
