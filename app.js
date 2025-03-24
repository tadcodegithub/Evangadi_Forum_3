//require("dotenv").config();
const express = require("express");
const app = express();

const questionRoutes = require("./routes/questionRoute");
const authMiddleWare = require("./middleWare/authMiddleWare");
const PORT=5500

//register route
app.post("/api/users/register",(req,res)=>{
    res.send("resgister user")
})
//login user
app.post("/api/users/login",(req,res)=>{
    res.send("login user")
})

//check user
app.get("/api/users/check",(req,res)=>{
    res.send("check user")
})

//question router
app.use("/api/question", questionRoutes);

app.listen(PORT,(err)=>{
    if(err){
        console.log(err.message)
    }else {
        console.log ("Litsenning on http://localhost:5500")
    }
})
