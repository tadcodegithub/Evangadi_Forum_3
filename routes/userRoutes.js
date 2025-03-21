const express = require('express');
const router = express.Router();

// usercontroller
const {  login } = require('../controller/userController');


router.get('/login',login)


module.exports= router;