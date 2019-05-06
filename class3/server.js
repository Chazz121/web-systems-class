const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('name', 'express')
  console.log('Cookies: ', req.cookies)
})

const server = app.listen((process.env.port), 'localhost', () => {
  const port = server.address().port
  const host = server.address().address
  console.log(`Server running. Go to http://${host}:${port}`)
})
