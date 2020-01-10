const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello World");
});

const port = 3000;

server.listen(port);
