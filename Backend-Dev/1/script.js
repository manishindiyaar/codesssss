// var d = 12;

// module.exports = d;

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello!')
})

app.listen(3000);   