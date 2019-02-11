const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const port = (3000 || process.env.port)

deleteFile = (filePath) => {
  fs.unlink(filePath, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}

renameFile = (filePath, renamedFile) => {
  newFilePath = path.dirname(filePath)+'/'+renamedFile
  fs.rename( filePath, newFilePath, function (err) {
    if (err) throw err;
    console.log('File renamed')
  });
}
copyFile = (filePath) => {
  copyPath = path.dirname(filePath) + '/Copy_' + path.basename(filePath)
  fs.copyFile(filePath,copyPath, (err) => {
    if (err) throw err
    console.log('File copied')
  }) 
}

download = (filePath,res) => {
  res.sendFile(filePath)
}

app.get('/?', (req, res) => {
  console.log(req.query.filePath)
  console.log(req.query.action)
  console.log(req.query.newName)

  if(req.query.action === 'download'){
    download(req.query.filePath,res)
  }
  if(req.query.action === 'delete'){
    deleteFile(req.query.filePath)
  }
  if(req.query.action === 'copy'){
    copyFile(req.query.filePath)
  }
  if(req.query.action === 'rename'){
    renameFile(req.query.filePath, req.query.newName)
  }
  res.end()

})

app.listen(port, '0.0.0.0', () => {
  console.log('app is listening on: ' + port)
})