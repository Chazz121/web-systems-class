
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3000;

let filePath;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Public/Views'));

app.get('/?', (req, res) => {
  res.render('index');
  console.log(req.query.filePath);
  const thisPath = req.query.filePath;
  filePath = thisPath;
  res.end();
});

app.post('/upload', upload.single('inputFile'), (req, res) => {
  const oldPath = path.join(__dirname, req.file.path);
  fs.rename(oldPath, path.join('/home/charles/', filePath), (err) => {
    if (err) throw err;
  });
  res.end('uploaded');
});

app.listen(port, '0.0.0.0');
