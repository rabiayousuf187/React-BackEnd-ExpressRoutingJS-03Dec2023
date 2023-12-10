const express = require("express");
const router = express.Router();
// const getUser = require("./../controller/users");
const users = require("./../controller/users");

// router.get("/", getUser);
router.get("/", users.getAllUsers);

module.exports = router;