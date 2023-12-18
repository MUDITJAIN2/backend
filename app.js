import  express from "express";

const app = express();

app.use("/apii",(req,res,next) => 
{
    res.send("mudit");
});

app.listen(5050);