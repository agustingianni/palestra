const express = require('express')
const router = express.Router()

const Users = require('../controllers/users')

router.post('/create', Users.createUser)
router.post('/login', Users.loginUser)

module.exports = router