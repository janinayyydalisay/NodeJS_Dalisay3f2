const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
//Controller or navigation
router.get('/', contactController.getContact);

module.exports = router;
