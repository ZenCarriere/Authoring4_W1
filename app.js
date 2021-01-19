const express = require('express');//like a php require
const server = express();
const path = require('path');

server.set("views", path.join(__dirname, 'views'));
//set the static assets directory so express knows where to look
//for css files, js files, images, etc - anything static
server.use(express.static(path.join(__dirname, 'public')));

server.get("/", (req, res) => {
  console.log('hit the home route');
  res.sendFile('ko no dio da!')
})

server.get("/contact", (req, res) => {
  console.log('hit the contact route');
  res.send('contact page');
} )

const port = process.env.PORT || 3000;//localhost:3000 in browser to view

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});