const router = require('express').Router()
const HealthCheckController = require('../controllers/healthcheck-controller')

// Prefix: /healthcheck
router.get('/', HealthCheckController.status)

module.exports = router
