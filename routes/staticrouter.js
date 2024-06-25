const {application}=require("express");
const express=require('express');


const router = express.Router();
router.get("/", async() =>{
    const allUrls = await URL.find({})
    return res.render("home",{urls:allUrls});
});
module.exports =router;