// routes/dataRoutes.js

const express = require('express');
const router_add = express.Router();
const dataController = require('../controllers/duaCont');

// Route to fetch all data
router_add.get('/duas', dataController.getAllData); // Change to GET for fetching

// Route to create a new Dua
router_add.post('/duas', dataController.createDua); // Use the correct path to create a Dua

module.exports = router_add;
