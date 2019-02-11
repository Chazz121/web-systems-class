const express = require('express')
const app = express()
const date = require('./date')

const port = (8080 || process.env.port)

app.use('/date', date)

app.get('/', (req, res) => {
  res.end('Hello World')
})

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
