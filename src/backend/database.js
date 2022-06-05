const mongoose = require('mongoose')
const { Database } = require("./utilities/settings")

module.exports = {
    connect: async () => {
        const connect_string = Database.uri

        console.log(`Connecting to database at ${connect_string}`)

        try {
            const conn = await mongoose.connect(connect_string)
            console.log(`Connected to database: ${conn.connection.name}`)
        } catch (error) {
            console.log(`Error connecting to database: ${error}`.red)
            process.exit(1)
        }
    }
}