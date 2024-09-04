const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
//Controller or navigation
router.get('/', portfolioController.getPortfolio);

module.exports = router;
