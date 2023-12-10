const express = require("express");
const router = express.Router();
const books = require("./../controller/books");
// const getUser = require("./../controller/books");

// router.get("/", getUser);
router.get("/", books.getAllBooks);

module.exports = router;