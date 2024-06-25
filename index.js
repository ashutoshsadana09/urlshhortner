const express =require("express");
const path=require("path");

const {connectToMongoDB} =require("./routes/connect");
const urlroute=require("./routes/url");
const URL = require("./models/url"); // Import the URL model
const app =express();

const PORT=8558;
connectToMongoDB("mongodb://localhost:27017/short-url").then(()=>console.log("mongo conncsted"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set("views",path.resolve("./views"));

app.use("/url", urlroute);
 app.get("/test",async (req,res)=>{
    const allUrls=await URL.find({});
    return res.render("home",{
        urls:allUrls,
   
    });
 });

app.get('/:shortid', async (req,res) => {
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortid 
    },{
        $push:{
            visitHistory: [{ timestamp: Date.now() }],
        }
    });
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("URL not found");
    }
});


app.listen(PORT,()=>console.log(`ssrver stated at ${PORT}`))