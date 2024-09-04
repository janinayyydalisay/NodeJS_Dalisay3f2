const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
//Controller or navigation
router.get('/', aboutController.getAbout);

module.exports = router;

