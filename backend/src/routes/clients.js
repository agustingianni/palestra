const express = require('express')
const router = express.Router()

const Clients = require('../controllers/clients')

router.route('/')
    .get(Clients.getClients)
    .post(Clients.createClient)

router.route('/:id')
    .delete(Clients.deleteClient)
    .put(Clients.updateClient)

module.exports = router