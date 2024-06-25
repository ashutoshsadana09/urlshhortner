const SHORTID = require("shortid");
const URL = require('../models/url');


async function urlshortner(req, res) {
    
   const body = req.body;
    if (!body.url) return res.status(400).json({"error": "url is required"});
    const shortID=SHORTID.generate();
        await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.render("home",{id:shortID});
     
}
async function getanalytics(req, res) {
    
    const shortId= req.params.SHORTID;
     
       const result=  await URL.findOne({
         shortId});
    
 
     return res.json({totalClicks:result.visitHistory.length, analytics: result.visitHistory,});
      
 }
module.exports={
    urlshortner,getanalytics
}