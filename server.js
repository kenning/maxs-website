const http = require('http')
const port = 3000
const fs = require('fs')

const requestHandler = (request, response) => {
  console.log(request.url)
  fs.readFile('./index.html', 'utf-8', function(error, content) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(content);
  });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
