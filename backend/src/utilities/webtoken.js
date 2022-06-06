const jwt = require('jsonwebtoken')

const { WebToken } = require("./settings")

const generate = (id) => {
    return jwt.sign(
        { id },
        WebToken.secret
    )
}

module.exports = {
    generate
}