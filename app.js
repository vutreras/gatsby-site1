const express = require('express');
const http = require('http');
const app = express();
app.use(express.static(__dirname + '/public'));

let server = http.createServer(app);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

module.exports = server;
