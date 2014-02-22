var http = require("http");

function start() {

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello world from benny at Work! Renton, WA (node.js on Cloud9 IDE)....server.js");
  response.end();
}

http.createServer(onRequest).listen(process.env.PORT, process.env.IP);

console.log("Server has started.");

}

exports.start = start;