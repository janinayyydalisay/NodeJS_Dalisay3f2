const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');
//Controller or navigation
router.get('/', servicesController.getServices);

module.exports = router;
