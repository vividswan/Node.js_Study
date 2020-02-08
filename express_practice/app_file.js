var express = require("express"); // express 모듈을 가져옴
var app = express(); // 애플리케이션 객체
app.locals.pretty = true; // jade express code pretty
app.set("views", "./views_file"); // views를 저장할 디렉토리 지정
app.set("view engine", "jade");
app.get("/topic/new", function(req, res) {
  res.render("new");
});
app.post("/topic", function(req, res) {
  res.send("Hi, post");
});
app.listen(3000, function() {
  console.log("Connected, 3000 port!");
});
