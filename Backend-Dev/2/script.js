
// To get Output -> npx nodemon script.js
const express = require('express')
const app = express();
const userModel = require('./users');


app.set("view engine", "ejs");
app.use(express.static("./public"))

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/create',  async function (req, res) {
  const createdUser = await userModel.create({
    username: "mindiyaar",
    name: "Manjeet",
    age: 17
  })
  res.send(createdUser)
})

app.listen(3000);
