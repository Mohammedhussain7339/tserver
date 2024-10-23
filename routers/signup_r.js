// routes/dataRoutes.js

const express = require('express');
const router_add = express.Router();
const authController = require('../controllers/userinfo_c');

// Route to fetch all data
router_add.post('/signup', authController.createUser); // Change to GET for fetching
router_add.post('/login', authController.loginUser); // Change to GET for fetching

// Route to create a new Dua
// router_add.post('/duas', dataController.createDua); // Use the correct path to create a Dua

module.exports = router_add;
