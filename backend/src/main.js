const { Application } = require("./utilities/settings")
const { ErrorMiddleWare } = require("./middleware/error")

const express = require("express")
const colors = require("colors")
const path = require("path")

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
    app.use(express.static(Application.frontend.path))

    // Use a middleware to handle errors in a consistent way.
    app.use(ErrorMiddleWare)

    // TODO(goose): Check if this makes sense.
    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(Application.frontend.path, 'index.html')
        )
    )

    app.listen(Application.backend.port, () => {
        console.log(`Server started on port http://localhost:${Application.backend.port}"`)
    })

}

main()