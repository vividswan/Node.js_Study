const http = require("http");

const server = http.createServer((request, response) => {
  response.write("Building Website using HTTP modules");
  response.end("Hello Server");
});
server.listen(8080);
server.on("listening", () => {
  console.log("listening Server(8080 port)");
});
server.on("error", (error) => {
  console.log(error);
});
