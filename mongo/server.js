const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const path = require('path')

const app = express()

const port = (8080 || process.env.port)

const mongoURL = 'mongodb://localhost:27017'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.get('/addcus', (req, res) => {
  res.render('addcus')
})

app.get('/changecus', (req, res) => {
  res.render('changecus')
})
app.post('/changecus', (req, res) => {
  const object = req.body
  const client = new MongoClient(mongoURL)
  client.connect((error, db) => {
    if (error) throw error
    else {
      db.db('mydb').collection('customers').updateOne({ name: object.name },
        { $set: { address: object.address } })
    }
  })
  res.end('updated')
})

app.post('/addcus', (req, res) => {
  const object = { name: req.body.name, address: req.body.address }
  const client = new MongoClient(mongoURL)
  client.connect((err, db) => {
    if (err) throw err
    else {
      db.db('mydb').collection('customers').insertOne({ name: object.name, address: object.address })
    }
    client.close()
  })
  console.log(`name: ${req.body.name}`)
  console.log(`address: ${req.body.address}`)
  res.end()
})
app.get('/cuslist', (req, res) => {
  const client = new MongoClient(mongoURL)
  client.connect((error, db) => {
    if (error) throw error
    else {
      db.db('mydb').collection('customers').find({}).toArray((error, documents) => {
        if (error) throw error
        else {
          res.send(documents)
        }
      })
    }
  })
})

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`App is listening on port: ${server.address().port}`)
})
