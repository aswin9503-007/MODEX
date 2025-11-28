const http = require('http');

const server = http.createServer(
    (req, res) => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(
            '<head><title>GeeksforGeeks</title><head>'
        );
        res.write(
            '<body><h2>Hello from Node.js server!!</h2></body>'
        );
        res.write('</html>');
        res.end();
    });

server.listen(3000, () => {
    console.log("Server listening on port 3000")
});