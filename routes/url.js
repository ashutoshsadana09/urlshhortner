const express = require("express");
const {
newURL,
Analytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", newURL);

router.get("/analytics/:shortId", Analytics);

module.exports = router;