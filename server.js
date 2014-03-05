var http = require("http");
var url = require("url"); 

function start(route) {

    function onRequest(request, response) {
     var pathname = url.parse(request.url).pathname;
     console.log("Request for " + pathname + " received.");
     
     route(pathname);
     
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write("Hello world from benny at Work! Renton, WA (node.js on Cloud9 IDE)....server.js...added pathname....added router");
     response.end();
}

http.createServer(onRequest).listen(process.env.PORT, process.env.IP);

console.log("Server has started.");

}

exports.start = start;