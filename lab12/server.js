const express = require('express');

const app =  expess();

app.get('/newdb', (req, res) => {
    const mongoclient = require('mongodb').mongoclient
    const url = "mongodb://localhost:21017/";
    mongoclient.connect(url,(err,db) =>{
        if (err) throw err;
        const dbo = db.db("webform")

    });
});

app.get('/convert')