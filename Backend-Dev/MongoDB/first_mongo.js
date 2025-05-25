import mongoose from 'mongoose';
import  express  from 'express';
let a = await mongoose.connect("mongodb://127.0.0.1:27017/first_test");


const app = express()
const port = 3002;


app.get('/', (req, res) => {
  res.send('Hello World!')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}
)