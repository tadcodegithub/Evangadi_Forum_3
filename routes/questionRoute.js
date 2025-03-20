const express = require("express");
const router = express.Router();

const { createQuestion } = require("../controller/questionController");

// Create a new question
router.post("/question", createQuestion);

module.exports = router;