// Handling a post method  (GET, POST, DELETE, PUT, PATCH)

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "submit") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert buffer to string
    });

    // End event triggered when all data  is received
    req.on("end", () => {
      console.log(JSON.parse(body));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Account created successfully.",
        })
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Not found" }));
  }
});

server.listen(8000, () => {
  console.log("Server listen at port 8000");
})
