const http = require("http");
const fs = require("fs");
http
  .createServer((request, response) => {
    fs.readFile("./server2.html", (err, data) => {
      if (err) {
        throw err;
      }
      response.end(data);
    });
  })
  .listen(8081, () => {
    console.log("listening 8081 port!");
  });
