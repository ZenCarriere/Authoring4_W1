const http = require('http');//like a php require

//require is more or less the same as js import

const hostname = '127.0.0.1';//this is localhost
const port = 3000;//localhost:3000 in browser to view

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ko No Dio Da!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});