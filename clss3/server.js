const express = require('express')
const bodyParser = require('body-parser')

const app = express()

port = (8080 || process.env.port)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.set('views',__dirname+'/Views')

app.get('/',(req,res) => {
    res.render('index')
})
app.post('/echo',(req,res) => {
    res.send(`first name: ${req.body.firstName}, lastname: ${req.body.lastName} `)
})

const server = app.listen(port, '0.0.0.0',() =>{
    console.log(`Example app listening at https://${server.address().address}:${server.address().port}`)
} )