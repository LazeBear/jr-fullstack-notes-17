const http = require('http'); // package name
const fs = require('fs');
const path = require('path');
// './home.html'
const homePage = fs.readFileSync(path.join(__dirname, 'home.html'));

const server = http.createServer((req, res) => {
  if ((req.url = '/home')) {
    res.write(homePage);
    res.end();
    return;
  }
  res.write('hello');
  res.end();
});

server.listen(3000);
