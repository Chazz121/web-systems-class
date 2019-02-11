var http = require('http')
const date = require('./date')



http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Hello World, today is '+ date.day)
}).listen(8000, () => {
  console.log('listening on port 8000')
})