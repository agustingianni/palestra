require("dotenv").config()
const path = require("path")

const Application = {
    development: process.env.NODE_ENV === "development",
    release: process.env.NODE_ENV === "release",
    backend: {
        port: process.env.APP_PORT,
    },
    frontend: {
        path: path.join(__dirname, '..', '..', '..', 'frontend')
    }
}

const Database = {
    uri: process.env.DATABASE_CONNECTION_STRING
}

module.exports = {
    Application,
    Database
}
