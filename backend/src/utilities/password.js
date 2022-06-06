const bcrypt = require('bcryptjs')

const hash = async (password) => {
    const password_salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, password_salt)
    return password_hash
}

const matches = async (p0, p1) => {
    return await bcrypt.compare(p0, p1)
}

module.exports = {
    hash,
    matches
}