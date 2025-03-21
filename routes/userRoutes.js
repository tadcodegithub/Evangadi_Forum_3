const express = require('express');
const router = express.Router();

// usercontroller

const {  register } = require('../controller/userController');


router.get('/register',register)

const {  login } = require('../controller/userController');


router.get('/login',login)



module.exports= router;