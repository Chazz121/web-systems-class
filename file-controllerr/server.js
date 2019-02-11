const express = require('express')
const app = express()

port =(3000 || process.env.port)

app.get('/?',(req, res) => {
    console.log(req.query.path)
    console.log(req.query.action)
    res.write('connd')
})

app.listen(port, '0.0.0.0', () => {
    console.log('app is listening on: ' + port)
})