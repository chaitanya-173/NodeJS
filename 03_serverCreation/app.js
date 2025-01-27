const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, I am coming from web server");
});

server.listen(8000, () => {
  console.log("Server listen at port 8000");
});
