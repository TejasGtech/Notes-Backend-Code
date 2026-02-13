const express = require('express')
const AuthControllers = require('../controllers/Auth.controllers')

const router = express.Router();

router.post('/register',AuthControllers.RegisterUser)
router.post('/login',AuthControllers.LoginUser)
router.get('/logout',AuthControllers.Logout)

module.exports = router;