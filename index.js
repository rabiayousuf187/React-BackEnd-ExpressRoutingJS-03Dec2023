const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())
const port = 5001;

// TO connect MongooDB
let connectToDatabase = require("./connectDb")
// Bases on MVC
const users = require('./src/router/users')
const books = require('./src/router/books')

app.use('/users', users)
app.use('/books', books)

mongoose.set("strictQuery", false);
connectToDatabase();

app.get('/', (req, res) => {
    res.send("Hello World....");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })