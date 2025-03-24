const express = require("express");
const { post } = require("./questionRoute");
const router = express.Router();


router.post("/", postAnswer);
