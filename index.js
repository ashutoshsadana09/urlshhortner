const express =require("express");
const {connectToMongoDB} =require("./routes/connect");
const urlroute=require("./routes/url");

const app =express();

const PORT=8001;
connectToMongoDB("mongodb://localhost:27017/short-url").then(()=>console.log("mongo conncsted"));
app.use(express.json())
app.use("/url", urlroute);

 
app.listen(PORT,()=>console.log(`ssrver stated at ${PORT}`))