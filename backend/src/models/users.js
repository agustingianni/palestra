const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },

        password_hash: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)

module.exports = model('Users', UserSchema)