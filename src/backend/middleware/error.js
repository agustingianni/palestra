const { Application } = require("../utilities/settings")

const ErrorMiddleWare = (err, req, res, next) => {
    res.status(res.statusCode ? res.statusCode : 500)
    res.json({
        message: err.message,
        stack: Application.development ? err.stack : null,
    })
}

module.exports = {
    ErrorMiddleWare
}