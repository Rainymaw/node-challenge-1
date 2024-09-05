const http = require("http");
const fs = require("fs");
const test_module = require("./test_module");
const os = require("os");
const path = require("path");

let hostname = "127.0.0.1";
let PORT = 8020;

const server = http.createServer((req, res) => {
  //Exercice: créer 2 autres pages HTML et faire le routage ici! /contact et /about
  switch (req.url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
      });
      break;
    case "/style.css":
      fs.readFile("style.css", (err, data) => {
        if (err) {
          return console.error(err);
        }
        res.writeHead(200, { "Content-type": "text/css" });
        res.end(data);
      });
      break;
    default:
  }
});

server.listen(PORT, hostname, () => {
  console.log("Hostname", hostname, " with port ", PORT);
  test_module();
  console.log(os.version());
  console.log(__dirname);
  console.log(path.join(__dirname, "/public"));
});
