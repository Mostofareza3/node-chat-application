// external exports
const express = require("express");

const router = express.Router();

//internal exports
const { getUsers } = require("../controller/usersController");

//login page
router.get("/", getUsers);

module.exports = router;
