const http = require("http");

const hostname = "127.0.0.1"; //127.0.0.1로 접속한 사용자에게 응답
const port = 3000; // 3000번 째 port 변수

const server = http.createServer((req, res) => {
  // createServer로 서버를 만듬
  // req => request(요청)
  // res => response(응답)
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World"); // 응답 결과
});

server.listen(port, hostname, () => {
  // 서버가 이 컴퓨터에 listening하게 시킴 , port와 hostname 전달
  console.log(`Server running at http://${hostname}:${port}/`);
});
