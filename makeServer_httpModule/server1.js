const http = require("http");

http
  .createServer((request, response) => {
    response.write("Building Website using HTTP modules");
    response.end("Hello Server");
  })
  .listen(8080, () => {
    console.log("listening Server(8080 port)");
  });
