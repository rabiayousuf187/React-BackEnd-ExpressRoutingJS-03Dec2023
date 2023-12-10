var express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
app.use(express.json())
app.use(cors())
const port = 5001;

// Bases on MVC
const users = require('./src/router/users')
const books = require('./src/router/books')

app.use('/users', users)
app.use('/books', books)

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.uvfwj5u.mongodb.net/auth", {
    useNewurlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected....")
})

app.get('/', (req, res) => {
    res.send("Hello World....");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })