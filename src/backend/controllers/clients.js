const asyncHandler = require('express-async-handler')

const Client = require('../models/clients')

// @desc    Get clients
// @route   GET /api/clients
// @access  Private
// @returns 200 Ok
const getClients = asyncHandler(async (req, res) => {
    const clients = await Client.find()
    res.status(200).json(clients)
})

// @desc    Set client
// @route   POST /api/clients
// @access  Private
// @returns 201 Created
// @returns 400 Bad Request
const setClient = asyncHandler(async (req, res) => {
    try {
        const client = new Client({
            name: req.body.name,
            lastname: req.body.lastname,
            type: req.body.type,
            start_date: req.body.start_date,
            subscription: req.body.subscription
        })

        await client.save()
        res.status(201).json(client)
    } catch (error) {
        res.status(400)
        throw error
    }
})

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private
const updateClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id)
    if (!client) {
        res.status(400)
        throw new Error("Client not found")
    }

    const updatedClient = await Client.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedClient)
})

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private
const deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id)
    if (!client) {
        res.status(400)
        throw new Error("Client not found")
    }

    await client.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getClients,
    setClient,
    updateClient,
    deleteClient,
}
