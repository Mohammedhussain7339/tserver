const express = require('express')
const router = express.Router();
const dataController= require('../controllers/quotesupdate_c');

router.delete('/updatequotes/:id',dataController.deleteQuote)
router.put('/updatequotes/:id',dataController.updateQuote)
module.exports=router;