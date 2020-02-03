const http = require("http");

const server = http.createServer(function(req, res) {
    // Log a message when message is recieved
    console.log(' Recieved ' + req.method + ' request for: ' + req.url);
    // send headerss
    res.writeHead(200, {'ContentType': 'text/plain'});
    // send body response 
    res.end("Hello World")
});

// listen for incoming connections 
server.listen(8080, 'localhost', null, function (){
    // log a msg that the server is listening and port 
    console.log('server is listening on localhost:8080');
});
