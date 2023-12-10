var express = require('express');
var app = express();
const port = 5001;

// Bases on MVC
const users = require('./src/router/users')
const books = require('./src/router/books')

app.use('/users', users)
app.use('/books', books)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })