const express = require("express");
const { Signup, Login } = require("../controllers/user");

const router = express.Router();

router.post("/", Signup);
router.post("/login",Login);

module.exports = router;