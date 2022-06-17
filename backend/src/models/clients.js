const { Schema, model } = require('mongoose')

const ClientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        lastname: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
            enum: ["regular", "athlete", "university", "management"]
        },

        start_date: {
            type: String,
            required: true,
        },

        subscription: {
            type: Number,
            required: true,
            enum: [1, 3, 6, 12]
        },

        photo: String,

        notes: String
    },
    {
        timestamps: true,
    }
)

module.exports = model('Clients', ClientSchema)