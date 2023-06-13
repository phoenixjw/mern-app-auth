const express = require('express')

// Contoller functions
 const { signupUser, loginUser } = require('../controllers/userController')


const router =express.Router()

// login route
router.post('/login', loginUser)

// Signup route
router.post('/signup', signupUser)

module.exports = router