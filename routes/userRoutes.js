const express = require('express');
const router = express.Router();

// usercontroller
const {  register } = require('../controller/userController');


router.get('/register',register)


module.exports= router;