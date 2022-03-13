// external exports
const express = require("express");

const router = express.Router();

//internal exports
const { getInbox } = require("../controller/inboxController");

//login page
router.get("/", getInbox);

module.exports = router;
