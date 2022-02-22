const express = require('express')

const professionalController = require('../controllers/professional')

const router = express.Router()

// GET /professional
router.get('/professional', professionalController.getProfessional)

module.exports = router