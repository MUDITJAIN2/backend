import  express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
.connect(
    "mongodb+srv:muditj214:fLJoURJiWTVoUA6n@cluster0.ymhxrjs.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(()=>app.listen(5050))
.then(()=>console.log("connected to database and listening to localhost on port 5050")
)
.catch((err)=>console.log(err));

