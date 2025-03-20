require("dotenv").config();
const express = require("express");
const app = express();

const questionRoutes = require("./route/questionRoute");
const authMiddleWare = require("./middleWare/authMiddleWare");

//question router
app.use("/api/questions", authMiddleWare, questionRoutes);
