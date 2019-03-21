const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views','Views')

app.get('/*.*', (req,res) => {
    if(['css','js','png','gif','txt','jpeg'].includes(req.url.split('.')[1])) {
        res.sendFile(__dirname+req.url);
    }else{
        res.end('sorry, i don\'t serve this kind of files')
    }
})
app.listen(8080)