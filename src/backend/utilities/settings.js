require("dotenv").config()

const Application = {
    development: process.env.NODE_ENV === "development",
    release: process.env.NODE_ENV === "release",
    port: process.env.APP_PORT,
}

const Database = {
    uri: process.env.DATABASE_CONNECTION_STRING
}

module.exports = {
    Application,
    Database
}
