const express = require('express');
const router = express.Router();
const RpsController = require('../controllers/RpsController')

router.get('/', RpsController.rps)


module.exports = router;