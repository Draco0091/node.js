var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(process.env.PORT || 8080, function() {
    console.log("Server is listening on port " + (process.env.PORT || 8080));
});

