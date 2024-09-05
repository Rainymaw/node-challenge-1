const http = require("http");

let hostname = "127.0.0.1";
let PORT = 8020;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Hello server </h1>");
});

server.listen(PORT, hostname, () => {
  console.log("Hostname", hostname, " with port ", PORT);
});
