const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
//Controller or navigation
router.get('/', indexController.getIndex);

module.exports = router;
