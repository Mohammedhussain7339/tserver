const express = require('express');
const router = express.Router();
const updateController = require('../controllers/namaztimeupdate');
router.put('/updatetimes/:id', updateController.updatetime); // Correct function name
router.delete('/updatetimes/:id', updateController.deletetime); // This looks correct
module.exports = router;
