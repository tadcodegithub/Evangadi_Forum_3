const express = require("express");
const router = express.Router();

const { createQuestion,getAllQuestion,singleQuestion } = require("../controller/questionController");

// Create a new question
router.post("/", createQuestion);
router.get("/", getAllQuestion);
router.get("/:question_id", singleQuestion);

module.exports = router;