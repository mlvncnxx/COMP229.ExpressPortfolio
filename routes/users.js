// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/mel', userController.mel);

//Sign-up 
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

//Sign-in
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin);

//Sign-out
router.get('/signout', userController.signout);

module.exports = router;
