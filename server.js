const fs = require('fs');
const http = require('http');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const indexStream = fs.createReadStream('index.html');
        indexStream.pipe(res);
    } else if (req.url.match('\.jpg$')) {
        const imageName = req.url.split('/').pop();
        const indexStream = fs.createReadStream(path.join(__dirname, 'image', 'cat2.png'));
        // res.writeHead(200, { "Content-Type": "image/jpeg" });
        indexStream.pipe(res);
    } else if (req.url.match('\.css$')) {
        const styleName = req.url.split('/').pop();
        const indexStream = fs.createReadStream(path.join(__dirname, 'styles', styleName));
        // res.writeHead(200, { "Content-Type": "text/css" });
        indexStream.pipe(res);
    } else if (req.url.match('\.js$')) {
        const scriptName = req.url.split('/').pop();
        const indexStream = fs.createReadStream(path.join(__dirname, 'scripts', scriptName));
        // res.writeHead(200, { "Content-Type": "text/plain" });
        indexStream.pipe(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end('<h1>Not Found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at: http://${hostname}:${port}/`);
})