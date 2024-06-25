const express=require('express');
const { urlshortner,getanalytics } = require("../controller/url");

const router = express.Router();

router.route("/")
    .post(urlshortner);

router.route("/analytics/:shortId")
    .get(getanalytics);

module.exports = router;

