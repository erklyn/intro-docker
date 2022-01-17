const http = require("http");

http
  .createServer(function (req, res) {
    console.log("request received");
    res.end("this message comming from a container", "utf-8");
  })
  .listen(3000);
console.log("server started");
