// Load environment variables.
require("dotenv").config()

const express = require("express")
const colors = require("colors")
const path = require("path")
const APP_PORT = process.env.APP_PORT

const Database = require("./database")

async function main() {
    // TODO(goose): This does not make much sense, does it keep connected?.
    await Database.connect()

    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    // Expose backend routes.
    app.use('/api/clients', require('./routes/clients'))

    // Expose frontend static contents.
    const frontend_path = path.join(__dirname, '../frontend')
    app.use(express.static(frontend_path))

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(frontend_path, 'index.html')
        )
    )

    app.listen(APP_PORT, () => {
        console.log(`Server started on port http://localhost:${APP_PORT}"`)
    })

}

main()