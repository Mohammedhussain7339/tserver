// routes/dataRoutes.js

const express = require('express');
const router_update = express.Router();
const updateController = require('../controllers/updatedua');

// Route to update a specific Dua (use PUT or PATCH)
router_update.put('/updateduas/:id', updateController.updateDua); // Correct function name

// Route to delete a specific Dua by ID
router_update.delete('/updateduas/:id', updateController.deleteDua); // Include the ID parameter for deleting

module.exports = router_update;
