// external exports
const express = require("express");

const router = express.Router();

//internal exports
const { getLogin } = require("../controller/loginController");

//login page
router.get("/", getLogin);

module.exports = router;
