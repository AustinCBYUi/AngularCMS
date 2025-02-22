const express = require('express');
const Client = require('../models/Client');
const router = express.Router();
const mongoose = require('mongoose');

// Routes \\


// GET: Get all clients \\
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients.' });
  }
});


//Get by ID (View)
router.get('/:id', async (req, res) => {
  try {
    const clientId = req.params.id;

    //validate ID
    if (!mongoose.Types.ObjectId.isValid(clientId)) {
      return res.status(400).json({ error: 'Client with id is invalid' });
    }

    const client = await Client.findById(clientId);

    if (!client) {
      return res.status(404).json({ error: 'Client does not exist' });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error('Error fetching client with id %s', error);
    res.status(500).json({ error: 'Failed to fetch client with id %s' });
  }
})


//Counter for clients
router.get('/dash/count', async (req, res) => {
  try {
    const count = await Client.countDocuments();
    res.json(count);
  } catch (error) {
    console.error('Error fetching client count:', error);
    res.status(500).json({ error: 'Failed to fetch count.' });
  }
})


// POST: Create a new client \\
router.post('/', async (req, res) => {
  try {
    const getUserDate = new Date(req.body.createdDate + 'T00:00:00');
    req.body.createdDate = getUserDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const client = new Client(req.body);
    await client.save();
    res.status(201).send(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create client.' });
  }
});


// DELETE: Delete a client \\
router.delete('/:id', async (req, res) => {
  try {
    const deleteClient = await Client.deleteOne({ _id: req.params.id });
    res.status(200).send(deleteClient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete client.' });
  }
});


// PUT: Update a client \\
// router.put('/:id', async (req, res) => {
//   try {
//     const updateClient = await Client.updateOne({ _id: req.params.id });
//     res.status(200).json(updateClient);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update client.' });
//   }
// })

module.exports = router;
