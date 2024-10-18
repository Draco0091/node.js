var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // If the root URL is accessed, serve the index.html file
    if (q.pathname === "/") {
        filename = "./index.html";
    }

    // Append .html extension if no extension is provided
    if (!path.extname(filename)) {
        filename += ".html";
    }

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/htm
