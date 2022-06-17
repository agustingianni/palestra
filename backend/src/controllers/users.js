const asyncHandler = require('express-async-handler')
const User = require('../models/users')
const Password = require('../utilities/password')
const WebToken = require('../utilities/webtoken')

// @desc    Create new user
// @route   POST /api/users/create
// @access  Public
// @returns 201 Created
// @returns 400 Bad Request
const createUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400)
        throw new Error('Missing fields')
    }

    if (await User.findOne({ username })) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        username,
        password_hash: await Password.hash(password),
    })

    if (!user) {
        res.status(400)
        throw new Error('Could not create user')
    }

    res.status(201).json({
        _id: user.id,
        name: user.name,
        token: WebToken.generate(user._id),
    })
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
// @returns 200 Ok
// @returns 400 Bad Request
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    const matches = await Password.matches(password, user.password_hash)
    if (!matches) {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    res.status(200).json({
        _id: user._id,
        name: user.name,
        token: WebToken.generate(user._id),
    })
})

// @desc    Return user details
// @route   GET /api/users/info
// @access  Private
// @returns 200 Ok
// @returns 400 Bad Request
const infoUser = asyncHandler(async (req, res) => {
    const { id } = req.params

    const user = await User.findById(id)
    if (!user) {
        res.status(400)
        throw new Error('Invalid id')
    }

    res.status(200).json({
        _id: user._id,
        name: user.username
    })
})

module.exports = {
    createUser,
    loginUser,
    infoUser
}