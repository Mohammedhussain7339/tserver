// routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/namaztime_c');

// Route to fetch all data
router.get('/namaztime', dataController.getNamaztime); // Change to GET for fetching

// Route to create a new Dua
router.post('/namaztime', dataController.createNamaztime); // Use the correct path to create a Dua

module.exports = router;
