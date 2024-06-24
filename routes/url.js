const express=require('express');
const { urlshortner } = require("../controller/url");

const router = express.Router();

router.post("/", urlshortner);
module.exports = router;

