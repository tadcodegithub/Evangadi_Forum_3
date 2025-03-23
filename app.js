//require("dotenv").config();
const express = require("express");
const app = express();

const questionRoutes = require("./routes/questionRoute");
const authMiddleWare = require("./middleWare/authMiddleWare");
PORT=5500

//question router
app.use("/api/question", questionRoutes);

app.listen(PORT,(err)=>{
    if(err){
        console.log(err.message)
    }else {
        console.log ("Litsenning on http://localhost:5500")
    }
})
